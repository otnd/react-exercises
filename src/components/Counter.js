import React from "react";

export class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { num: this.props.initialValue };
        setInterval(() => {
            this.setState((state) => ({ num: state.num + this.props.incrementAmount }))
        }, this.props.incrementInterval)
    }

    render() {
        return <h1>Counter: {this.state.num}</h1>
    }
}

export default Counter;