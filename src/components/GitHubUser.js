import React, { useEffect, useState } from "react"



function GitHubUser({ username = "otnd" }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData))
    }, [username])

    return (
        <>
            {data && <h1>{data.login}</h1>}
        </>
    )

}

export default GitHubUser