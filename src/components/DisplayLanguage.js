import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const dictionary = {
    it: 'Hai selezionato la lingua italiana',
    en: 'You have selected english language'
}


export const DisplayContent = () => {
    const lang = useContext(LanguageContext)

    return (
        <h1>{dictionary[lang]}</h1>
    )
}