import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        user: null,
        age: null
    }

    handleInput = (e) => {
        if (e.target.name === 'user') {
            this.setState({ user: e.target.value })
        }
        else {
            this.setState({ age: e.target.value })
        }
    }

    render() {
        return (
            <>
                <input placeholder="insert name" value={this.state.user} name="user" type="text" onChange={this.handleInput} />
                <input placeholder="insert age" value={this.state.age} name="age" type="text" onChange={this.handleInput} />
                <Welcome name={this.state.user} age={this.state.age} />
            </>
        )
    }
}