import React, { useEffect, useState } from "react"

function useGitHubUser(username) {
    const [gitHubUserData, setData] = useState(null)
    const [errorStatus, setError] = useState(null)
    const [loadingStatus, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.status !== 200) {
                    setError(new Error('An error has occurred'))
                }
                else return response.json()
            })
            .then(fetchedData => setData(fetchedData))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [username])

    return {
        data: gitHubUserData,
        error: errorStatus,
        loading: loadingStatus
    }
}

function GitHubUser({ username }) {
    const { data, error, loading } = useGitHubUser(username)
    console.log(error)

    return (
        <>
            {loading && <li>Loading...</li>}
            {error && <li>An error has occurred</li>}
            {data && <li>This user exist - {data.login}</li>}
        </>
    )

}

export default GitHubUser