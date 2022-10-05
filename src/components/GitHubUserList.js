import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GitHubUserList({ userList = ["otnd"] }) {
    const [data, setData] = useState({ users: userList, newUser: null });

    useEffect(() => {
        setData(prevData => ({ ...prevData, users: [...prevData.users, prevData.newUser] }))
    }, [data.newUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(prevData => ({ ...prevData, newUser: e.target.elements.userfield.value }))
    }

    return (
        <>
            <ul>
                {data.users.map(function (item, index) {
                    if (item) {
                        return <li key={index}><Link to={item}>{item}</Link></li>
                    }
                    else return null
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userfield" />
                <button type="submit">Submit</button>
            </form>
            <Outlet />
        </>
    )
}