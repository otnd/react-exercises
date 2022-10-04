import React from "react"
import Age from "./Age"

export class Welcome extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome, {this.props.name}</h1>
                {this.props.age > 18 && this.props.age < 65 && <Age age={this.props.age} />}
            </>
        )
    }
}
Welcome.defaultProps = {
    name: "Davide",
}
export default Welcome;