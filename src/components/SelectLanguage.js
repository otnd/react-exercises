import React from "react";
import { DisplayContent } from "./DisplayContent";
import { LanguageContext } from "./LanguageContext";


export class SelectLanguage extends React.Component {
    state = {
        lang: 'en'
    }

    handleChange = (e) => {
        this.setState({ lang: e.target.value })
    }

    render() {
        return (
            <div>
                <select value={this.state.lang} onChange={this.handleChange}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>
                <LanguageContext.Provider value={this.state.lang}>
                    <DisplayContent />
                </LanguageContext.Provider>
            </div>
        )
    }
}