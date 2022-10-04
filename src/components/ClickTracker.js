import React from "react";


export class ClickTracker extends React.Component {
    state = { target: null }

    handleClick = (e) => {
        this.setState({ target: e.target.name })
    }

    render() {
        return (
            <div>
                <button name="Button 1" onClick={this.handleClick}>Button 1</button>
                <button name="Button 2" onClick={this.handleClick}>Button 2</button>
                <button name="Button 3" onClick={this.handleClick}>Button 3</button>
                {
                    this.state.target
                        ? <h1>Last pressed: {this.state.target}</h1>
                        : <h1>Press a button</h1>
                }
            </div>
        )
    }
}