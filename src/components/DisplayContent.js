import React from "react";
import { LanguageContext } from "./LanguageContext";

const dictionary = {
    it: 'Hai selezionato la lingua italiana',
    en: 'You have selected english language'
}


export class DisplayContent extends React.Component {
    render() {
        return (<div>
            <LanguageContext.Consumer>
                {
                    Language => <h1>{dictionary[Language]}</h1>
                }
            </LanguageContext.Consumer>
        </div>)
    }
}