import React from "react";

const loginStyle = {
    backgroundColor: 'red'
}

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

    reset = () => {
        this.setState({
            user: '',
            password: '',
            remember: ''
        })
    }


    render() {
        return (
            <div>
                <input name="user" type="text" value={this.state.user} onChange={this.handleInputChange} />
                <input name="password" style={{ backgroundColor: this.state.password.length < 8 ? 'red' : 'green' }} type="password" value={this.state.password} onChange={this.handleInputChange} />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                <button disabled={this.state.user && this.state.password ? false : true}>Login</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}