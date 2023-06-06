import Styles from './Account.module.css';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import AvatarImage from '../../assets/Avatar-1.png';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LabelledInput from '../../components/LabelledInput/index';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ErrorText from '../../components/ErrorText/index';
import { isValidAge, isValidName, isValidPassword } from '../../utils/inputValidation';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import useAuthStore from '../../stores/authStore';

function Account() {
    const authStore = useAuthStore();
    const [user] = useLoaderData();
    const navigate = useNavigate();
    const [checkedDelete, setCheckedDelete] = useState(false);
    const [userData, setUserData] = useState({
        userId: '',
        name: '',
        age: '',
        gender: '',
        email: '',
        password: '',
    })
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNameError, setShowNameError] = useState(false);
    const [showAgeError, setShowAgeError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        setUserData({
            ...userData,
            userId: user.customerId,
            name: user.name,
            age: user.age,
            gender: user.gender,
            email: user.email,
            });
    }, [user])

    const handleDeleteAccount = () => {
        fetch(`/api/customer/deleteAccount/${user.customerId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => {
                authStore.logout();
                sessionStorage.removeItem('token')
                navigate('/')
                toast.success('Account Deleted')
            })
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault()

        if (!isValidPassword(userData.password)) {
            setShowPasswordError(true)
            return
        }

        if (confirmPassword !== userData.password) {
            setShowConfirmPasswordError(true)
            return
        }

        fetch(`/api/customer/updatePassword/${user.customerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: userData.email
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => {
                setShowPasswordError(false)
                setShowConfirmPasswordError(false)
                toast.success(result)
            })
            .catch(err => toast.error('Unexpected error. Please try later'))
    }

    const handleEmailSubmit = (e) => {
        e.preventDefault()

        console.log(userData.email)
        fetch(`/api/customer/updateEmail/${user.customerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: userData.email
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => {
                toast.success(result);
            })
            .catch(err => {
                if (err.message === '409') {
                    toast.error("This email has been used by another account")
                } else {
                    toast.error("Unexpected error. Please try again later")
                }
            })
    }

    const handlePersonalInfoSubmit = (e) => {
        e.preventDefault();
        if (!isValidName(userData.name)) {
            setShowNameError(true)
            return
        }

        if (!isValidAge(userData.age)) {
            setShowAgeError(true)
            return
        }

        fetch(`/api/customer/updateProfileInfo/${user.customerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: userData.name,
                Age: userData.age,
                Gender: userData.gender
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.json())
                }
                return res.json()
            })
            .then(result => {
                setShowAgeError(false)
                setShowNameError(false)
                toast.success(result);
            })
            .catch(err => toast.error(err.message))
    }



    return (
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                {/*Delete Account Dialog*/}
                <Dialog
                    open={showDeleteDialog}
                    onClose={() => setShowDeleteDialog(false)}
                    aria-labelledby="delete-account"
                    aria-describedby="delete-account"
                >
                    <DialogTitle id="delete-account-title">
                        Delete Account?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            By doing so, your LearnEn account will be removed permanently.All your data will no longer be available.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowDeleteDialog(false)}>No</Button>
                        <Button color='error' onClick={handleDeleteAccount}>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>

                {/*Sidebar Menu*/}
                <div>

                </div>

                <div className={Styles.content}>
                    <section className={Styles.card}>
                        <div className={Styles.profile}>
                            {/*User Profile Image*/}
                            <Avatar
                                src={AvatarImage}
                                alt="Profile image"
                                variant="rounded"
                            />
                            <div className={Styles.profile_info}>
                                <p>{user.name}</p>
                                <div>
                                    <VerifiedRoundedIcon sx={{ color: '#1437E9' }} />
                                    <p>Verified Account</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={Styles.card}>
                        <form onSubmit={handlePersonalInfoSubmit}>
                            <p className={Styles.form_title}>Personal Info</p>
                            {/*Personal Info*/}
                            <LabelledInput
                                id="name"
                                label="Name"
                                value={userData.name}
                                placeholder={user.name}
                                onChange={(e) => setUserData({...userData, name: e.target.value})}
                                className={Styles.form_input}
                            />
                            <ErrorText
                                show={showNameError}
                                text="Name shoult at least 3"
                            />

                            <LabelledInput
                                id="age"
                                type="number"
                                label="Age"
                                value={userData.age}
                                placeholder={user.age}
                                onChange={(e) => setUserData({...userData, age: e.target.value})}
                                className={Styles.form_input}
                            />
                            <ErrorText
                                show={showAgeError}
                                text="Invalid age"
                            />

                            <InputLabel id="gender">Gender</InputLabel>
                            <Select
                                labelId="gender"
                                id="gender"
                                value={userData.gender}
                                label="Gender"
                                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                                sx={{ borderRadius: '8px' }}
                                fullWidth
                            >
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>

                            <button
                                type='submit'
                                className={`primary_button rounded ${Styles.submit_button}`}
                            >
                                Save Info
                            </button>
                        </form>
                    </section>

                    <section className={Styles.card}>
                        <form onSubmit={handleEmailSubmit}>
                            <p className={Styles.form_title}>Change Email</p>
                            <LabelledInput
                                type='email'
                                id='email'
                                label='Email'
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            />

                            <button
                                type="submit"
                                className={`primary_button rounded ${Styles.submit_button}`}
                            > 
                                Save Email
                            </button>
                        </form>
                    </section>

                    <section className={Styles.card}>
                        <form onSubmit={handlePasswordSubmit}>
                            <p className={Styles.form_title}>Change Password</p>
                            <LabelledInput
                                type='password'
                                id='current-password'
                                label='Current Password'
                                value={user.password}
                            />
                            

                            <LabelledInput
                                type='password'
                                id='new-password'
                                label='New Password'
                                className={Styles.form_input}
                                value={userData.password}
                                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                            />
                            <ErrorText
                                show={showPasswordError}
                                text='Password length should at least 6'
                            />

                            <LabelledInput
                                type='password'
                                id='confirm-password'
                                label='Confirm New Password'
                                className={Styles.form_input}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <ErrorText
                                show={showConfirmPasswordError}
                                text='Password not match'
                            />

                            <button
                                type="submit"
                                className={`primary_button rounded ${Styles.submit_button}`}
                            >
                                Save Password
                            </button>
                        </form>
                    </section>

                    <section className={Styles.card}>
                        <form>
                            <p className={Styles.form_title}>Delete Account</p>
                            <p className={Styles.delete_info}>Once you delete your account, all your data will be gone. </p>

                            <div className={Styles.switch}>
                                <Switch
                                    color='warning'
                                    checked={checkedDelete}
                                    onChange={() => setCheckedDelete(prev => !prev)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <span>Confirm</span>
                            </div>

                            <button
                                type="submit"
                                className={`primary_button rounded ${Styles.submit_button}`}
                                disabled={!checkedDelete}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setShowDeleteDialog(true)
                                }}
                            >
                                Delete Account
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
        )
}

export default Account;
