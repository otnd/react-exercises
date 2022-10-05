import React, { useEffect, useState } from "react"

function useGitHubUser(username) {
    const [gitHubUserData, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData))
    }, [username])

    return {
        data: gitHubUserData
    }
}

function GitHubUser({ username }) {
    const { data } = useGitHubUser(username)

    return (
        <>
            {data && <>{data && <h1>{data.login ? data.login : 'user not found'}</h1>}</>}
        </>
    )

}

export default GitHubUser