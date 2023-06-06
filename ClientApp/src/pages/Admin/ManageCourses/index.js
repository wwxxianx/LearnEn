import React, { useState, useEffect, useMemo } from "react";
import Styles from "./manageCourses.module.css";
import SearchBar from "../../../components/SearchBar";
import CourseCard from "../../../components/CourseCard";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import CourseDialog from "./CourseDialog";
import toast, { Toaster } from 'react-hot-toast';
import CourseSkeleton from "../../../components/CourseSkeleton/index";

function ManageCourses() {
    const [isLoading, setIsLoading] = useState(true);
    const [allWritingExercises, setAllWritingExercises] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState({});
    const [deleteExerciseTitle, setDeleteExerciseTitle] = useState("");
    const [showCourseDialog, setShowCourseDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);

    useEffect(() => {
        fetchWritingExercise();
    }, [])

    const filteredWritingExercises = useMemo(() => {
        return allWritingExercises.filter(exercise => {
            return exercise.title.toLowerCase().includes(searchText.toLowerCase())
        })
    }, [allWritingExercises, searchText])

    const fetchWritingExercise = () => {
        fetch('/api/writingExercise')
            .then(res => res.json())
            .then(data => {
                setAllWritingExercises(data);
            })
            .catch(err => toast.error(err))
            .finally(() => setIsLoading(false))
    }

    const handleCourseClick = (exercise) => {
        setSelectedExercise(exercise);
        setShowEditDialog(true);
        setShowCourseDialog(true);
    }

    const handleDeleteClick = (e, exercise) => {
        e.stopPropagation();
        setSelectedExercise(exercise);
        setShowDeleteDialog(true);
    }

    const handleDeleteCourse = () => {
        fetch(`/api/writingExercise/${selectedExercise.exerciseId}`, {
            method: 'DELETE',
            headers: {
                'ACCEPT': 'application/json',
                'Content-Type': 'application/json'
                }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json();
            })
            .then(message => {
                fetchWritingExercise();
                setShowDeleteDialog(false);
                toast.success(message);
            })
            .catch(err => toast.error('Unexpected error. Please try aggain'))
    }

    const handleAddClick = () => {
        // Clean up before open dialog
        setShowEditDialog(false);
        setSelectedExercise({});
        setShowCourseDialog(true);
    }

    const handleCloseCourseDialog = () => {
        setShowEditDialog(false);
        setShowCourseDialog(false);
    }

    const reloadExercises = (newExercise) => {
        setAllWritingExercises([...allWritingExercises, newExercise])
    }

    return (
        <div className={Styles.container}>
            {/* Enable hot toast */}
            <Toaster />
            
            <div className={Styles.top_bar}>
                <h4>Course List</h4>

                <div>
                    <div className={Styles.search_bar}>
                        <SearchBar
                            placeholder="Search courses"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onSubmit={(e) => e.preventDefault()}
                        />
                    </div>
                    <button
                        className="secondary_button rounded"
                        onClick={handleAddClick}
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Course list */}
            <div className={Styles.course_list}>
                {isLoading ?
                    <CourseSkeleton />
                    : 
                    filteredWritingExercises.length ? filteredWritingExercises.map((exercise) => (
                        <CourseCard
                            course={exercise}
                            onCourseClick={() => {
                                handleCourseClick(exercise);
                            }}
                            enableDelete={true}
                            onDeleteClick={(e) => handleDeleteClick(e, exercise)}
                        />
                    )) : (
                        <div>Can't found exercise with title {searchText}</div>
                    )
                }
            </div>

            {/* Edit || Add course dialog */}
            <CourseDialog
                open={showCourseDialog}
                isEdit={showEditDialog}
                onClose={handleCloseCourseDialog}
                onDone={reloadExercises}
                selectedCourse={selectedExercise}
            />

            {/* Delete dialog */}
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
                        Delete this Writing Exercise?
                    </p>
                    <p style={{ fontSize: "16px", fontWeight: "500" }}>
                        Doing so will permanently delete the exercise from the
                        database and record will no longer exist
                    </p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginTop: "16px" }}>
                        Confirm you want to delete this exercise by typing the
                        title:{" "}
                        <span style={{ fontWeight: "600", color: "black" }}>
                            {selectedExercise.title}
                        </span>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="course"
                        label="Course title to delete"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={deleteExerciseTitle}
                        onChange={(e) => setDeleteExerciseTitle(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowDeleteDialog(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDeleteCourse}
                        disabled={deleteExerciseTitle !== selectedExercise.title}
                        color="error"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ManageCourses;
