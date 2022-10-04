import React from 'react';

export class Welcome extends React.Component {
    render() {
        return (
            <>
                {<h1>Welcome, {this.props.name}!</h1>}
                {<p>Your age is, {this.props.age}</p>}
            </>
        )
    }
}
Welcome.defaultProps = {
    name: "Davide",
    age: "21"
}
export default Welcome;