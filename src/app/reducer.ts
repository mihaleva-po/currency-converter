import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypeState} from "../type";

const initialStore = {
    valueUSD: undefined,
    valueEUR: undefined
};

export const converterSlice = createSlice({
    name: 'converter',
    initialState: initialStore,
    reducers: {

        setValueUSD: (state: TypeState, action: PayloadAction<string | undefined>) => {

            if (action.payload === undefined) {
                state.valueUSD = state.valueEUR = undefined;
            } else {

                let valueUSD = (Number(action.payload) / 1.07).toFixed(2);

                if (valueUSD.length > 16) {
                    valueUSD = Number(valueUSD).toExponential(10);
                }

                state.valueUSD = valueUSD;
                state.valueEUR = action.payload;
            }
        },

        setValueEUR: (state: TypeState, action: PayloadAction<string | undefined>) => {

            if (action.payload === undefined) {
                state.valueUSD = state.valueEUR = undefined;
            } else {
                let valueEUR = (Number(action.payload) * 1.07).toFixed(2);

                if (valueEUR.length > 16) {
                    valueEUR = Number(valueEUR).toExponential(10);
                }

                state.valueEUR = valueEUR;
                state.valueUSD = action.payload;
            }
        }
    }
})

