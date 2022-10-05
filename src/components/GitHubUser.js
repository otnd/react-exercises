import useSWR from "swr"

const fetcher = (url) =>
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(('An error occurred while fetching the data.'))
            }
            else return response.json()
        })


export function useGitHubUser(username) {
    const { data, error } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

    return {
        data, error, loading: !data && !error
    }
}


export function GitHubUser({ username }) {
    const { data, error, loading } = useGitHubUser(username)

    return (
        <>
            {loading && <li>Loading...</li>}
            {error && <li>An error has occurred</li>}
            {data && <li>This user exist - {data.login}</li>}
        </>
    )
}