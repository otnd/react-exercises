import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {

    handleChange = () => {
        const user = this._formRef.current.elements.user.value;
        const password = this._formRef.current.elements.password.value;
        console.log(user, password)
        if (user && password) {
            this._formRef.current.elements.loginBtn.disabled = false
        }
        else {
            this._formRef.current.elements.loginBtn.disabled = true
        }
    }

    _formRef = createRef()

    render() {
        return (
            <div>
                <h1>Uncontrolled Form</h1>
                <form ref={this._formRef} onChange={this.handleChange}>
                    <input type="text" name="user" />
                    <input type="password" name="password" />
                    <input type="checkbox" />
                    <button name="loginBtn" disabled>Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}