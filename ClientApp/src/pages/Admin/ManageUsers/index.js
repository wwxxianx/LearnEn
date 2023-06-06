import React, { useState } from "react";
import Styles from "./ManageUsers.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import SearchBar from "../../../components/SearchBar";
import { toast } from 'react-hot-toast';
import { useEffect } from "react";
import AvatarPlaceholder from '../../../assets/Avatar-1.png';
import { useMemo } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import ReactMarkdown from 'react-markdown';

function ManageUsers() {
    const [userList, setUserList] = useState([]);
    const [exerciseResponseList, setExerciseResponseList] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [showMarkingDialog, setShowMarkingDialog] = useState(false);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [mark, setMark] = useState(0);

    useEffect(() => {
        fetch('/api/customer')
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => {
                setUserList(result)
            })
            .catch(err => toast.error(err.message))

        fetch('/api/writingExercise/allResponses')
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => setExerciseResponseList(result))
            .catch(err => toast.error('Unexpected error when fetching exercise response'))

    }, [])

    const filteredUser = useMemo(() => {
        return userList.filter(user => {
            return user.name.toLowerCase().includes(searchText.toLowerCase()) ||
                user.email.toLowerCase().includes(searchText.toLowerCase())
        })
    }, [searchText, userList])

    const userColumns = [
        { field: "customerId", headerName: "ID", width: 70 },
        {
            field: "image", headerName: "Image", width: 100, renderCell: (params) => {
                if (params.value === undefined) {
                    return <Avatar src={AvatarPlaceholder} alt='User profile image' />
                } else {
                      return (
                        <Avatar src={params.value} alt="User image" />
                      )
                }
        }},
        { field: "email", headerName: "Email", width: 170 },
        { field: "name", headerName: "Name", width: 130 },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            width: 90,
        },
        {
            field: "gender",
            headerName: "Gender",
            width: 100,
        },
    ];

    const exerciseResponseColumns = [
        { field: "responseId", headerName: "ID", width: 70 },
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
        { field: "title", headerName: "Exercise Title", width: 170 },
        { field: "answer", headerName: "Answer", width: 130 },
        { field: "submitDate", headerName: "Submit Date", width: 130 }
    ];

    const handleResponseItemClick = (params, event, details) => {
        setSelectedResponse(exerciseResponseList.find(response => response.responseId === params.id))
        setShowMarkingDialog(true)
    }

    const handleMarkSubmit = () => {
        fetch(`/api/writingExercise/marking/${selectedResponse.responseId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Mark: mark
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => {
                toast.success(result)
                setShowMarkingDialog(false);
            })
            .catch(err => toast.error('Unexpected error. Please try again later'))
    }

    return (
        <div className={Styles.container}>
            <section>
                <h3>Site Statistics</h3>
                {/* Card */}
                <div className={Styles.card_list}>
                    <div className={Styles.card}>
                        <div className={Styles.card_img}>
                            <span className="material-symbols-rounded">
                                leaderboard
                            </span>
                        </div>
                        <div>
                            {/* Card content */}
                            <h5>Today Visitors</h5>
                            <p>+ 10.5k</p>
                        </div>
                    </div>

                    <div className={Styles.card}>
                        <div className={Styles.card_img}>
                            <span className="material-symbols-rounded">
                                visibility
                            </span>
                        </div>
                        <div>
                            {/* Card content */}
                            <h5>Course View</h5>
                            <p>+ 10.5k</p>
                        </div>
                    </div>

                    <div className={Styles.card}>
                        <div className={Styles.card_img}>
                            <span className="material-symbols-rounded">person</span>
                        </div>
                        <div>
                            {/* Card content */}
                            <h5>New Users</h5>
                            <p>+ 10.5k</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*User Table*/}
            <section className={Styles.table_wrapper}>
                <div>
                    <h3>User List</h3>
                    <div className={Styles.search_bar}>
                        <SearchBar
                            placeholder="Search users..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onSubmit={(e) => e.preventDefault()}
                        />
                    </div>
                </div>

                {/* User Table */}
                <div style={{ height: 500, width: "100%", maxWidth: 1200 }}>
                    <DataGrid
                        rows={filteredUser}
                        columns={userColumns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        getRowId={(row) => row.customerId}
                    />
                </div>
            </section>

            {/*Marking Table*/}
            <section className={Styles.table_wrapper}>
                <div>
                    <h3>Marking List</h3>
                    <div className={Styles.search_bar}>
                        <SearchBar
                            placeholder="Search by exercise id..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onSubmit={(e) => e.preventDefault()}
                        />
                    </div>
                </div>
                {/* Marking Table */}
                <div style={{ height: 500, width: "100%", maxWidth: 1200 }}>
                    {/*Marking Dialog*/}
                    <Dialog open={showMarkingDialog} onClose={() => setShowMarkingDialog(false)}>
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
                                Marking
                            </p>
                        </DialogTitle>
                        <DialogContent>
                            <p style={{ fontSize: '18px', fontWeight: '500' }}>Exercise Title: <span>{selectedResponse?.title}</span></p>
                            <p style={{ fontSize: '18px', fontWeight: '500' }}>Answer:</p>
                            <div>
                                <ReactMarkdown>
                                    {selectedResponse?.answer}
                                </ReactMarkdown>
                            </div>
                            <TextField
                                id="mark"
                                label="Mark"
                                type="number"
                                fullWidth
                                variant="standard"
                                value={mark}
                                onChange={(e) => setMark(e.target.value)}
                                sx={{ marginTop: "16px" }}
                                error={mark <= 0 || mark > 100}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setShowMarkingDialog(false)}>Cancel</Button>
                            <Button onClick={handleMarkSubmit} disabled={mark <= 0 || mark > 100}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </Dialog>
                    
                    <DataGrid
                        onRowClick={handleResponseItemClick}
                        rows={exerciseResponseList}
                        columns={exerciseResponseColumns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        getRowId={(row) => row.responseId}
                    />
                </div>
            </section>
        </div>
    );
}

export default ManageUsers;
