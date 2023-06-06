import React, { useEffect, useMemo, useState } from "react";
import Styles from "./nav.module.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/learnEn_logo.png";
import SearchBar from "../SearchBar";
import useAuthStore from "../../stores/authStore";
import AuthForm from "./AuthForm";
import UserProfileMenu from "./UserProfileMenu";
import { allCourses } from "../../libs/courses";
import { toast } from 'react-hot-toast';

function Root() {
    const authStore = useAuthStore();
    const navigate = useNavigate();
    const [showingTransparentBackground, setShowingTransparentBackground] =
        useState(false);
    const [searchText, setSearchText] = useState("")
    const [showAuthForm, setShowAuthForm] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [allWritingExercises, setAllWritingExercises] = useState([]);

    const handleScrollEffect = () => {
        if (window.scrollY > 100) {
            setShowingTransparentBackground(true);
        } else {
            setShowingTransparentBackground(false);
        }
    };

    const searchResults = useMemo(() => {
        if (searchText === '') return []
        const matchCourse = allCourses.filter(course => {
            return course.title.toLowerCase().includes(searchText.toLowerCase())
        })
        const matchExercises = allWritingExercises.filter(exercise => {
            return exercise.title.toLowerCase().includes(searchText.toLowerCase())
        })
        return [...matchCourse, ...matchExercises];
    }, [searchText, allWritingExercises])

    const handleSearchItemClick = (item) => {
        if (item.type === undefined) {
            navigate(`/writing/${item.exerciseId}`)
        } else {
            navigate(`/course/${item.id}`)
        }
    }

    const handleLogout = () => {
        authStore.logout()
        sessionStorage.removeItem('token')
        setShowSidebar(false)
        toast.success('Logged out!')
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollEffect);
        fetch('/api/writingExercise')
            .then(res => res.json())
            .then(result => setAllWritingExercises(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className={Styles.content_wrapper}>
            {/* Show login form OR not */}
            <AuthForm
                show={showAuthForm}
                onClose={() => {
                    setShowAuthForm(false);
                }}
            />

            {/* Mobile sidebar menu */}
            <div
                data-visible={showSidebar}
                className={Styles.sidebar_wrapper}
            >
                <div className={Styles.sidebar_container}>
                    {/* User profile image */}
                    {/* <img /> */}
                    <button
                        className="icon_button"
                        onClick={() => {
                            setShowSidebar(false);
                        }}
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive
                                ? Styles.active_nav_link
                                : Styles.nav_link
                        }
                        onClick={() => {
                            setShowSidebar(false);
                        }}
                    >
                        <p className={Styles.nav_item}>Home</p>
                    </NavLink>

                    <NavLink
                        to={"courses"}
                        className={({ isActive }) =>
                            isActive
                                ? Styles.active_nav_link
                                : Styles.nav_link
                        }
                        onClick={() => {
                            setShowSidebar(false);
                        }}
                    >
                        <p className={Styles.nav_item}>Courses</p>
                    </NavLink>

                    <NavLink
                        to={"vocab"}
                        className={({ isActive }) =>
                            isActive
                                ? Styles.active_nav_link
                                : Styles.nav_link
                        }
                        onClick={() => {
                            setShowSidebar(false);
                        }}
                    >
                        <p className={Styles.nav_item}>Vocab</p>
                    </NavLink>

                    <NavLink
                        to={"funguess"}
                        className={({ isActive }) =>
                            isActive
                                ? Styles.active_nav_link
                                : Styles.nav_link
                        }
                        onClick={() => {
                            setShowSidebar(false);
                        }}
                    >
                        <p className={Styles.nav_item}>FunGuess</p>
                    </NavLink>

                    <NavLink
                        to={"writings"}
                        className={({ isActive }) =>
                            isActive
                                ? Styles.active_nav_link
                                : Styles.nav_link
                        }
                        onClick={() => {
                            setShowSidebar(false);
                        }}
                    >
                        <p className={Styles.nav_item}>Writing</p>
                    </NavLink>

                    <NavLink
                        to={"aboutUs"}
                        className={({ isActive }) =>
                            isActive
                                ? Styles.active_nav_link
                                : Styles.nav_link
                        }
                        onClick={() => {
                            setShowSidebar(false);
                        }}
                    >
                        <p className={Styles.nav_item}>About Us</p>
                    </NavLink>

                    {authStore.isAuthenticated && authStore.userRole === 'user' && (
                        <NavLink
                            to={`account/${authStore.userId}`}
                            className={({ isActive }) =>
                                isActive
                                    ? Styles.active_nav_link
                                    : Styles.nav_link
                            }
                            onClick={() => {
                                setShowSidebar(false);
                            }}
                        >
                            <p className={Styles.nav_item}>My Account</p>
                        </NavLink>
                    )}

                    {authStore.isAuthenticated ? (
                        <button
                            className="secondary_button circle w-100"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            className="secondary_button circle w-100"
                            onClick={() => {
                                setShowSidebar(false);
                                setShowAuthForm(true);
                            }}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            <header
                className={`${Styles.nav_wrapper} ${showingTransparentBackground &&
                    Styles.transparent_nav_wrapper
                    }`}
            >
                <nav className={Styles.nav_container}>
                    <Link to={"/"}>
                        <img
                            className={Styles.nav_logo}
                            src={Logo}
                            alt="LearnEn Logo"
                        />
                    </Link>

                    <ul className={Styles.nav_items}>
                        <li>
                            <NavLink
                                to={"courses"}
                                className={({ isActive }) =>
                                    isActive
                                        ? Styles.active_nav_link
                                        : Styles.nav_link
                                }
                            >
                                <p className={Styles.nav_item}>Courses</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={"aboutUs"}
                                className={({ isActive }) =>
                                    isActive
                                        ? Styles.active_nav_link
                                        : Styles.nav_link
                                }
                            >
                                <p className={Styles.nav_item}>About Us</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={"vocab"}
                                className={({ isActive }) =>
                                    isActive
                                        ? Styles.active_nav_link
                                        : Styles.nav_link
                                }
                            >
                                <p className={Styles.nav_item}>Vocab</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={"funguess"}
                                className={({ isActive }) =>
                                    isActive
                                        ? Styles.active_nav_link
                                        : Styles.nav_link
                                }
                            >
                                <p className={Styles.nav_item}>Fun Guess</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={"writings"}
                                className={({ isActive }) =>
                                    isActive
                                        ? Styles.active_nav_link
                                        : Styles.nav_link
                                }
                            >
                                <p className={Styles.nav_item}>Writing</p>
                            </NavLink>
                        </li>
                    </ul>

                    <div className={Styles.search_bar}>
                        <SearchBar
                            placeholder="Search courses..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onSubmit={(e) => { }}
                            showPopper={true}
                            popperResults={searchResults}
                            onItemClick={handleSearchItemClick}
                        />
                    </div>
                    {/* Search Bar */}

                    {/* Mobile sidebar toggle button */}
                    <button
                        className={`icon_button ${Styles.nav_toggle_button}`}
                        onClick={() => {
                            setShowSidebar(true);
                            console.log(`showSidebar: ${showSidebar}`);
                        }}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>

                    {authStore.isAuthenticated && authStore.userRole === 'user' ? (
                        <UserProfileMenu />
                    ) : (
                            <button
                                className={`secondary_button circle ${Styles.login_button}`}
                                onClick={() => {
                                    setShowAuthForm(true);
                                }}
                            >
                                <p className="f-6">Login</p>
                            </button>
                    )}
                </nav>
            </header>

            <main className={Styles.content_container}>
                <Outlet />
                <footer className={Styles.footer_wrapper}>
                    
                    <div className={Styles.footer_container}>
                        <div>
                            {/* Company Logo & Intro */}
                            <img className={Styles.footer_logo} src={Logo} alt="LearnEn logo" />
                            <p>
                                We provide free English learning resources that
                                are interactive and fun.
                            </p>
                        </div>

                        <div className={Styles.footer_link_group}>
                            {/* Links group */}
                            <div>
                                <h4>Our Services</h4>
                                <Link
                                    className={Styles.footer_nav_link}
                                    to={"courses"}
                                >
                                    Courses
                                </Link>
                                <Link
                                    className={Styles.footer_nav_link}
                                    to={"vocab"}
                                >
                                    Vocab
                                </Link>

                                <Link
                                    className={Styles.footer_nav_link}
                                    to={"writings"}
                                >
                                    Writing
                                </Link>

                                <Link
                                    className={Styles.footer_nav_link}
                                    to={"funguess"}
                                >
                                    Fun Guess
                                </Link>
                            </div>

                            <div>
                                <h4>Company</h4>
                                <Link
                                    className={Styles.footer_nav_link}
                                    to={"aboutUs"}
                                >
                                    About Us
                                </Link>
                            </div>

                            <div>
                                <h4>Links</h4>
                                <Link
                                    className={Styles.footer_nav_link}
                                    to={"donation"}
                                >
                                    Donation
                                </Link>
                            </div>
                        </div>

                        <p>© 2023 - 2023 learnEn.com - All Rights Reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default Root;
