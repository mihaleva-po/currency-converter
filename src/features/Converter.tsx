import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {converterSlice} from "../app/reducer";
import AreaInput from "../components/AreaInput";
import {TypeState} from "../type";
import styles from './Converter.module.scss';
import arrows from '../images/arrows.svg';
import usd from '../images/usd.svg';
import eur from '../images/eur.svg';


const Converter = () => {

    const valueUSD = useSelector((state: { converter: TypeState }) => state.converter.valueUSD);
    const valueEUR = useSelector((state: { converter: TypeState }) => state.converter.valueEUR);

    const dispatch = useDispatch();

    const {actions} = converterSlice;
    const {setValueUSD, setValueEUR} = actions;

    const handleChangeUSD = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 17) {
            if (e.target.value.includes('e')) {
                dispatch(setValueEUR(e.target.value.replace(/e[+\d]+/gm, "")));
            } else {
                dispatch(setValueEUR(e.target.value));
            }
        }
    };

    const handleChangeEUR = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 17) {
            if (e.target.value.includes('e')) {
                dispatch(setValueUSD(e.target.value.replace(/e[+\d]+/gm, "")));
            } else {
                dispatch(setValueUSD(e.target.value));
            }
        }
    };

    return (
        <div className={styles['container']}>

            <AreaInput label={"USD"} id={"currencyUSD"} value={valueUSD} handleChange={handleChangeUSD}
                       alt={'imgUSD'} src={usd}/>

            <img src={arrows} alt={'arrows'}/>

            <AreaInput label={"EUR"} id={"currencyEUR"} value={valueEUR} handleChange={handleChangeEUR}
                       src={eur} alt={"imgEUR"}/>

        </div>
    );
};


export default Converter;
