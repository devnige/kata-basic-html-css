import { useState, useEffect } from "react";

export function GitHubUser( { login }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, [login]);

    if(data) {
        return (
            <div className="avatar">
                <img src ={data.avatar_url} width={100} alt="avatar of GitHub user"/>
            </div>
        );
    }
    return null
}