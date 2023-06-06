import Styles from "./nav.module.css";
import Input from "../Input";
import ErrorText from "../ErrorText";
import { motion, AnimatePresence } from "framer-motion";
import Select from "../Select";
import loadingAnimation from "../../assets/lotties/loading.json";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getUserFromToken } from "../../utils/getUserFromToken";
import useAuthStore from "../../stores/authStore";
import { isValidEmail, isValidPassword } from "../../utils/inputValidation";
import toast from "react-hot-toast";

function AuthForm({ show, onClose }) {
    const authStore = useAuthStore();
    const navigate = useNavigate();
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showAgeError, setShowAgeError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");
    const firstFocusableElementRef = useRef(null);
    const lastFocusableElementRef = useRef(null);

    useEffect(() => {
        if (firstFocusableElementRef.current) {
            firstFocusableElementRef.current.focus();
        }
    }, [])

    const handleRegister = () => {
        setIsLoading(true);
        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: email,
                Password: password,
                Name: username,
                Age: age,
                Gender: gender,
                IsSubscribe: 0,
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(result => {
                toast.success(`Account registered! Please Login to your account!`)
                resetFormInput();
                resetError();
                setShowLoginForm(true);
            })
            .catch(err => {
                if (err.message === '409') {
                    toast.error("This email has been used by another account");
                } else {
                    toast.error('Unexpected error. Please try again later');
                }
            })
            .finally(() => setIsLoading(false))
    }

    const handleLogin = () => {
        setIsLoading(true);
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: email,
                Password: password
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(result => {
                sessionStorage.setItem('token', result.token)
                const user = getUserFromToken();
                console.log(user);
                authStore.login(user);
                if (user.role === 'admin' || user.role === 'superAdmin') {
                    navigate('/admin/manageUsers');
                }
                onClose();
                toast.success("Log in successfully!")
            })
            .catch(err => {
                if (err.message === '401') {
                    toast.error("Invalid account");
                } else {
                    toast.error("Something went wrong!")
                }
            })
            .finally(() => setIsLoading(false))
    }

    const resetError = () => {
        setShowAgeError(false);
        setShowEmailError(false);
        setShowPasswordError(false);
        setShowUsernameError(false);
    }

    const resetFormInput = () => {
        setEmail("");
        setPassword("");
        setUsername("");
        setAge("");
    }

    const handleAuth = (e) => {
        e.preventDefault();

        resetError();

        if (!isValidEmail(email)) {
            setShowEmailError(true);
            return;
        }

        if (!isValidPassword(password)) {
            setShowPasswordError(true);
            return;
        }

        if (!showLoginForm) {
            // User Registration
            // Check registration data
            if (username.trim().length < 3) {
                setShowUsernameError(true);
                return;
            }

            if (age.trim() <= 0) {
                setShowAgeError(true);
                return;
            }
        }


        if (showLoginForm) {
            // Login action
            handleLogin();
            return;
        } else {
            // Register action
            handleRegister();
            return;
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Tab' && event.shiftKey && document.activeElement === firstFocusableElementRef.current) {
            event.preventDefault();
            lastFocusableElementRef.current.focus();
        }

        if (event.key === 'Tab' && !event.shiftKey && document.activeElement === lastFocusableElementRef.current) {
            event.preventDefault();
            firstFocusableElementRef.current.focus();
        }
    };

    if (!show) {
        return;
    }

    return (
        <div className={Styles.form_wrapper}>
            <form
                className={Styles.form_container}
                onSubmit={handleAuth}
                role='dialog'
                aria-labelledby='Login form'
                onKeyDown={handleKeyDown}
            >
                {/* Close button */}
                <button
                    className="icon_button"
                    type="button"
                    onClick={onClose}
                    aria-label='Close login form'
                    tabindex='0'
                    ref={firstFocusableElementRef}
                >
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                {isLoading && (
                    <div className={Styles.form_loading}>
                        <Lottie animationData={loadingAnimation} />;
                    </div>)
                }
                <h4>{showLoginForm ? "Login" : "Register"}</h4>
                <p>Use your account to enjoy our course!</p>
                <Input
                    className="w-100"
                    type="email"
                    label="email"
                    title="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ErrorText
                    show={showEmailError}
                    text="Invalid email format"
                />

                <Input
                    className="w-100"
                    type="password"
                    label="password"
                    title="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ErrorText
                    show={showPasswordError}
                    text="Password length must at least 6 and contains at least 1 character and digit"
                />

                <AnimatePresence>
                    {/* Input for register */}
                    {!showLoginForm && (
                        <motion.div
                            className={Styles.register_form}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: "auto",
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.3,
                                    opacity: { delay: 0.1 },
                                },
                            }}
                            exit={{ height: 0, opacity: 0 }}
                        >
                            <Input
                                className="w-100"
                                label="username"
                                title="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <ErrorText
                                show={showUsernameError}
                                text="Username length must at least 3"
                            />

                            <Input
                                className="w-100"
                                label="age"
                                title="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <ErrorText
                                show={showAgeError}
                                text="Invalid age"
                            />

                            <Select
                                className="w-100"
                                label="gender"
                                title="Gender"
                                options={["male", "female"]}
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    className="primary_button rounded w-100"
                    type="submit"
                >
                    {showLoginForm ? "Login" : "Register"}
                </button>
                <p>
                    {showLoginForm ? "Don't" : "Already"}have an
                    account?
                    <span
                        onClick={() => {
                            setShowLoginForm((prev) => !prev);
                            resetError();
                        }}
                        onKeyDown={(e) => {
                            if (e.code === 'Enter' || e.code === 'Space') {
                                setShowLoginForm(prev => !prev);
                                resetError();
                            }
                        }}
                        tabindex='0'
                        aria-controls={`${showLoginForm ? 'Go to register form' : 'Go to login form'}`}
                        ref={lastFocusableElementRef}
                    >
                        {showLoginForm ? "Sign Up Now" : "Sign In Now"}
                    </span>
                </p>
            </form>
        </div>
        )
}

export default AuthForm;