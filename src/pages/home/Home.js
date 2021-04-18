import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "../../App";

export default function Home() {
    const {state, dispatch} = useContext(AuthContext);

    if (!state.isLoggedIn) {
        return <Redirect to="/login"/>;
    }


    const { avatar_url, name, public_repos, followers, following} = state.user

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
    }

    return (
        <div className="container">
            <button onClick={() => handleLogout()}>Logout</button>
            <div>
                <div className="content">
                    <img src={avatar_url} alt="Avatar"/>
                    <span>{name}</span>
                    <span>{public_repos} Repos</span>
                    <span>{followers} Followers</span>
                    <span>{following} Following</span>
                </div>
            </div>
        </div>
    );
}