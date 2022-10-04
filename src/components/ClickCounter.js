import React from "react";

export class ClickCounter extends React.Component {
    state = { count: this.props.initialValue }

    handleClick = () => this.setState((state) => ({ count: state.count + this.props.incrementValue }))

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleClick.bind(this)}>Increment by {this.props.incrementValue}</button>
            </div>
        )
    }
}