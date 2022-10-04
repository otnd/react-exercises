import React from "react"
import Age from "./Age"

export class Welcome extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome, {this.props.name}</h1>
                {this.props.age > 18 ? <Age age={this.props.age} /> : <p>You are very young!</p>}
            </>
        )
    }
}
Welcome.defaultProps = {
    name: "Davide",
    age: "21",
}
export default Welcome;