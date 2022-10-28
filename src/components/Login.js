import React, { useState } from "react";

function Login() {
    const [loginData, setLoginData] = useState({
        user: '',
        password: '',
        remember: false
    })

    function handleInputChange(e) {
        setLoginData(data => ({
            ...data,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        }))
    }

    return (
        <>
            <form action="">
                <input type="text" name="user" placeholder="Username" value={loginData.user} onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleInputChange} />
                <input type="checkbox" name="remember" checked={loginData.remember} onChange={handleInputChange} />
                <button disabled={loginData.user && loginData.password ? false : true}>Login</button>
            </form>
        </>
    )
}

export default Login
