import { useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

const ShowGitHubUser = (props) => {
    const { username } = useParams()

    return (<h1><GitHubUser username={props.username} /></h1>)
}

export default ShowGitHubUser;