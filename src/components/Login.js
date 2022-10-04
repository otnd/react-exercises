import React from "react";

export class Login extends React.Component {
    state = {
        user: '',
        password: '',
        remember: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }
    render() {
        return (
            <>
                <input name="user" type="text" placeholder="Username" value={this.state.user} onChange={this.handleInputChange} />
                <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
            </>
        )
    }
}