import React from "react";

export class Login extends React.Component {
    state = {
        user: '',
        password: '',
        remember: false,
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.props.onLogin}>
                <input name="user" type="text" value={this.state.user} onChange={this.handleInputChange} />
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                <button disabled={this.state.user && this.state.password ? false : true}>Login</button>
            </form>
        )
    }
}