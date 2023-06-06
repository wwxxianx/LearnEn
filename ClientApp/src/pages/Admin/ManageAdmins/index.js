import SearchBar from '../../../components/SearchBar/index';
import Styles from '../ManageUsers/ManageUsers.module.css';
import { DataGrid } from "@mui/x-data-grid";
import { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { isValidEmail, isValidPassword } from '../../../utils/inputValidation';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function ManageAdmins() {
    const [adminList, setAdminList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState('');
    const [newAdmin, setNewAdmin] = useState({
        email: '',
        password: ''
    })

    const columns = [
        { field: "adminId", headerName: "ID", width: 70 },
        //{
        //    field: "image", headerName: "Image", width: 100, renderCell: (params) => {
        //        if (params.value === undefined) {
        //            return <Avatar src={AvatarPlaceholder} alt='User profile image' />
        //        } else {
        //            return (
        //                <Avatar src={params.value} alt="User image" />
        //            )
        //        }
        //    }
        //},
        { field: "email", headerName: "Email", width: 170 },
        { field: "password", headerName: "Password", width: 130 },
    ];

    const filteredAdminList = useMemo(() => {
        return adminList.filter(admin => {
            return admin.email.toLowerCase().includes(searchText.toLowerCase())
        })
    }, [searchText, adminList])

    const handleAdminClick = (params, event, details) => {
        setSelectedAdmin(adminList.find(admin => admin.adminId === params.id));
    }

    const handleDeleteAdmin = () => {
        setAdminList(prev => prev.filter(admin => admin.adminId !== selectedAdmin.adminId))
        setShowDeleteDialog(false)
        toast.success('Delete admin successfully')
    }

    const handleAddAdmin = () => {
        fetch('/api/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                AdminId: adminList.length + 1,
                Email: newAdmin.email,
                Password: newAdmin.password
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => {
                console.log(result)
                setAdminList([...adminList, result])
                toast.success('New admin added successfully!')
            })
            .catch(err => toast.error('Unexpected error'))
    }

    useEffect(() => {
        fetch('/api/admin')
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => {
                console.log(result)
                setAdminList(result)
            })
            .catch(err => toast.error('Unexpected error. Please try later'))
    }, [])

    return (
        <div>
            <section className={Styles.table_wrapper}>
                {/*Delete Dialog*/}
                <Dialog
                    className={Styles.delete_dialog}
                    open={showDeleteDialog}
                    onClose={() => setShowDeleteDialog(false)}
                >
                    <DialogTitle
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 1,
                            backgroundColor: "#FBE9E7",
                            color: "#C62828",
                        }}
                    >
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                fontWeight: "600",
                            }}
                        >
                            <span class="material-symbols-rounded">warning</span>
                            Delete this Admin?
                        </p>
                        <p style={{ fontSize: "16px", fontWeight: "500" }}>
                            Doing so will permanently delete the admin from the
                            database and record will no longer exist
                        </p>
                    </DialogTitle>
                    <DialogContent>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowDeleteDialog(false)}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleDeleteAdmin}
                            color="error"
                        >
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                    <DialogTitle
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 1,
                            backgroundColor: "#E2EBFF",
                        }}
                    >
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                fontWeight: "600",
                            }}
                        >
                            Add New Admin
                        </p>
                        <p style={{ fontSize: "16px", fontWeight: "500" }}>
                            Fill up all the textfields with valid data to add a new
                            admin.
                        </p>
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={newAdmin.email}
                            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                            sx={{ marginTop: "16px" }}
                            error={!isValidEmail(newAdmin.email)}
                        />

                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            value={newAdmin.password}
                            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                            sx={{ marginTop: "16px" }}
                            error={!isValidPassword(newAdmin.password)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowDialog(false)}>Cancel</Button>
                        <Button onClick={handleAddAdmin} disabled={false}>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>

                <div>
                    <h3>Admin List</h3>
                    <div className={Styles.search_bar}>
                        <SearchBar
                            placeholder="Search users..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onSubmit={(e) => e.preventDefault()}
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <Button
                            onClick={() => setShowDialog(true)}
                            variant='contained'
                            startIcon={<AddRoundedIcon />}
                            sx={{
                                backgroundColor: '#1437E9'
                                }}
                        >
                            Add
                        </Button>

                        <Button
                            onClick={() => setShowDeleteDialog(true)}
                            color='error'
                            variant='outlined'
                            startIcon={<DeleteForeverRoundedIcon />}
                        >
                            Delete
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div style={{ height: 600, width: "100%", maxWidth: 1200 }}>
                    <DataGrid
                        onRowClick={handleAdminClick}
                        rows={adminList}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        getRowId={(row) => row.adminId}
                    />
                </div>
            </section>
        </div>
        )
}

export default ManageAdmins;