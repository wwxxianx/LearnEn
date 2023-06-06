import React, { useState } from "react";
import Styles from "./adminRoot.module.css";
import { NavLink, Outlet, redirect } from "react-router-dom";
import Logo from "../../../assets/learnEn_logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "../../../stores/authStore";
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

function AdminRoot() {
    const authStore = useAuthStore();
    const navigate = useNavigate()

    function handleLogout() {
        authStore.logout()
        sessionStorage.removeItem('token')
        navigate("/")
    }

    useEffect(() => {
        // Check if the user is authenticated and has the required role
        if (!authStore.isAuthenticated || (authStore.userRole !== 'admin' && authStore.userRole !== 'superAdmin')) {
            navigate('/');
        }
    }, [authStore.isAuthenticated, authStore.userRole, navigate]);

    return (
        <div className={Styles.content_wrapper}>
            <nav className={Styles.nav_container}>
                <div>
                    <img className={Styles.logo}  src={Logo} alt="LearnEn logo" />

                    <NavLink
                        to={"/admin/manageUsers"}
                        className={({ isActive }) =>
                            isActive ? Styles.active_nav_link : Styles.nav_link
                        }
                    >
                        <p className={Styles.nav_item}>
                            <span class="material-symbols-rounded">person</span>
                            Users
                        </p>
                    </NavLink>

                    <NavLink
                        to={"/admin/manageCourses"}
                        className={({ isActive }) =>
                            isActive
                                ? Styles.active_nav_link
                                : Styles.nav_link
                        }
                    >
                        <p className={Styles.nav_item}>
                            <span class="material-symbols-rounded">list_alt</span>
                            Courses
                        </p>
                    </NavLink>

                    {authStore.userRole === 'superAdmin' && (
                        /*Show ManageAdmins Panel*/
                        <NavLink
                            to={"/admin/manageAdmins"}
                            className={({ isActive }) =>
                                isActive
                                    ? Styles.active_nav_link
                                    : Styles.nav_link
                            }
                        >
                            <p className={Styles.nav_item}>
                                <AdminPanelSettingsRoundedIcon sx={{ fontSize: '30px' }}/>
                                Admins
                            </p>
                        </NavLink>
                    )}
                </div>

                <button
                    className="primary_button rounded w-100"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </nav>
            
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminRoot;
