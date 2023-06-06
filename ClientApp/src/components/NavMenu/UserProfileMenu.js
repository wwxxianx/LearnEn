import Avatar from '@mui/material/Avatar';
import ProfileImage from "../../assets/Avatar-1.png";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useState, useRef } from 'react';
import Styles from "./nav.module.css";
import useAuthStore from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';

function UserProfileMenu() {
    const authStore = useAuthStore();
    const navigate = useNavigate();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const profileMenuRef = useRef(null);

    const handleLogout = () => {
        authStore.logout();
        // Remove JWT token
        sessionStorage.removeItem('token');
    }

    const navigateToAccount = () => {
        navigate(`/account/${authStore.userId}`);
    }

    return (
        <div className={Styles.avatar_button}>
            <Avatar
                ref={profileMenuRef}
                id="profile-menu-button"
                src={ProfileImage}
                alt="User profile image"
                aria-controls={showProfileMenu ? 'profile-menu' : undefined}
                aria-expanded={showProfileMenu ? 'true' : undefined}
                aria-haspopup="true"
                onMouseEnter={() => setShowProfileMenu(true)}
            />
            <Popper
                open={showProfileMenu}
                anchorEl={profileMenuRef.current}
                role={undefined}
                placement="top-end"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'top-start' ? 'right top' : 'right bottom',
                        }}
                    >
                        <div className={Styles.profile_menu}>
                            <ClickAwayListener onClickAway={() => setShowProfileMenu(false)}>
                                <MenuList
                                    autoFocusItem={showProfileMenu}
                                    id="profile-menu"
                                    aria-labelledby="profile-menu-button"
                                >
                                    <MenuItem onClick={navigateToAccount}>My account</MenuItem>
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </div>
                    </Grow>
                )}
            </Popper>
        </div>
        )
}

export default UserProfileMenu;
