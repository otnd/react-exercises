import React from "react";

export class Container extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <div className="container">{this.props.children}</div>
            </>
        )
    }
}