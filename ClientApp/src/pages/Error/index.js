import React from 'react'
import { useRouteError, useNavigate, NavLink } from 'react-router-dom'
import Styles from "./Error.module.css";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/lotties/404-error.json";
import Logo from "../../assets/learnEn_logo.png";

function ErrorPage() {
    // useRouteError will produce the error
    const error = useRouteError()
    const navigate = useNavigate();

    return (
        <div className={Styles.wrapper}>
            <nav>
                <NavLink
                    to={"/"}
                >
                    <img
                        className={Styles.logo}
                        src={Logo}
                        alt="LearnEn logo"
                    />
                </NavLink>
            </nav>

            <div className={Styles.content_container}>
                <h4>Page Not Found!</h4>
                <p>Sorry, we couldn’t find the page you’re looking for. Maybe the page is already removed from LearnEn...</p>
                <Lottie
                    className={Styles.illustration}
                    animationData={errorAnimation}
                    loop={true}
                />
                <button
                    className="primary_button circle"
                    onClick={() => navigate("/")}
                >
                    Go to Home
                </button>
            </div>
        </div>
    )
}

export default ErrorPage