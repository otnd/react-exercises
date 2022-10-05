import React, { useState } from "react";

function useForm(data = { user: '', password: '', remember: false }) {
    const [formData, setData] = useState(data);

    const input = (e) => setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }))

    return {
        values: formData,
        onInput: input
    }
}



function Login() {
    const { values, onInput } = useForm()

    return (
        <form>
            <input type="text" name="user" placeholder="Username" value={values.user} onChange={onInput} />
            <input type="text" name="password" placeholder="Password" value={values.password} onChange={onInput} />
            <button disabled={values.user && values.password ? false : true}>Login</button>
        </form>
    )


}

export default Login