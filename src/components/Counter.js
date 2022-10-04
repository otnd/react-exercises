import React from "react";

export class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { num: 0 };
        setInterval(() => {
            this.setState((state) => ({ num: state.num + 1 }))
        }, 1000)
    }

    render() {
        return <h1>Counter: {this.state.num}</h1>
    }
}

export default Counter;