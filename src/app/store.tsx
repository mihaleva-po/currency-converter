import {configureStore} from "@reduxjs/toolkit";
import {converterSlice} from "./reducer";


const {reducer} = converterSlice;

export const store = configureStore({
    reducer: {
        converter: reducer
    },
    devTools: true
});
