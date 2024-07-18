import React from 'react';
import {IAreaInputProps} from "../type";
import styles from './AreaInput.module.scss';


const AreaInput = ({label, id, value, handleChange, src, alt}: IAreaInputProps) => {
    return (
        <div className={styles['container']}>

            <div style={{display: "flex", alignItems: "center"}}>
                <label htmlFor="currency">{label}</label>
                <img src={src} alt={alt}/>
            </div>

            <input id={id} type="number" value={value !== undefined ? value : ''} onChange={handleChange}/>
        </div>
    );
};

export default AreaInput;
