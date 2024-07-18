import React from "react";

interface TypeState {
    valueUSD: string | undefined
    valueEUR: string | undefined
}

interface IAreaInputProps {
    id: string,
    label: string,
    value: string | undefined,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    alt: string,
    src: string
}
