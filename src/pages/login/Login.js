import React, {useContext, useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "../../App";

export default function Login() {
    const {state, dispatch} = useContext(AuthContext);
    const [data, setData] = useState({errorMessage: "", isLoading: false});

    const {client_id, redirect_uri} = state;

    useEffect(() => {
        // After requesting Github access, Github redirects back to your app with a code parameter
        const url = window.location.href;
        const hasCode = url.includes("?code=");

        if (hasCode) {
            const newUrl = url.split("?code=");
            window.history.pushState({}, null, newUrl[0]);
            setData({...data, isLoading: true});

            const requestData = {
                code: newUrl[1]
            };

            const proxy_url = state.proxy_url;

            fetch(proxy_url, {
                method: "POST",
                body: JSON.stringify(requestData)
            })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    document.cookie = "accessToken=" + data.accessToken;
                    dispatch({
                        type: "LOGIN",
                        payload: {user: data.user, isLoggedIn: true}
                    });
                })
                .catch(error => {
                    setData({
                        isLoading: false,
                        errorMessage: "Sorry! Login failed"
                    });
                });
        }
    }, [state, dispatch, data]);

    if (state.isLoggedIn) {
        return <Redirect to="/"/>;
    }

    return (
        <section className="container">
            <div>
                <h1>Welcome</h1>
                <span>Super amazing app</span>
                <span>{data.errorMessage}</span>
                <div className="login-container">
                    {data.isLoading ? (
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <a
                            className="login-link"
                            href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                            onClick={() => {
                                setData({...data, errorMessage: ""});
                            }}
                        >
                            <span>Login with GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}