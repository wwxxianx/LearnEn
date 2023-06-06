import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Styles from "./manageCourses.module.css";
import { toast } from 'react-hot-toast';

function CourseDialog({
    open,
    isEdit,
    selectedCourse,
    onClose,
    onDone
}) {
    const [title, setTitle] = useState("");
    const [level, setLevel] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [wordCount, setWordCount] = useState("");
    const [duration, setDuration] = useState("");
    const [hints, setHints] = useState("");
    const [sampleAnswer, setSampleAnswer] = useState("");
   
    const invalidCourse = () => {
        return title === "" || title?.trim().length < 3 || price === "" ||
            level === "" || price < 0 || wordCount < 0 || duration < 0 ||
            hints?.trim().length < 3 || !image?.includes('/images/writingExercise/') ||
            sampleAnswer?.trim().length < 10;
    }

    const handleClose = () => {
        onClose();
        setTitle("");
        setLevel("");
        setPrice("");
        setImage("");
        setWordCount("");
        setDuration("");
        setHints("");
    }

    const handleSubmit = () => {
        // Handle both ADD and UPDATE
        // Use the 'isEdit' state to determine
        console.log(sampleAnswer);
        fetch(`/api/writingExercise`, {
            method: isEdit ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ExerciseId: selectedCourse.exerciseId ? selectedCourse.exerciseId : 0,
                Title: title,
                Level: level,
                Image: image,
                WordCount: wordCount,
                Duration: duration,
                Price: price,
                Hints: hints,
                Sample: sampleAnswer,
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json();
            })
            .then(result => {
                console.log(result)
                onClose();
                onDone(result);
                toast.success("New exercises added!");
            })
            .catch(err => toast.error('Unexpected error. Please try again'))
    }

    useEffect(() => {
        if (selectedCourse !== undefined) {
            setTitle(selectedCourse.title)
            setLevel(selectedCourse.level)
            setPrice(selectedCourse.price)
            setImage(selectedCourse.image)
            setWordCount(selectedCourse.wordCount)
            setDuration(selectedCourse.duration)
            setHints(selectedCourse.hints)
            setSampleAnswer(selectedCourse.sample)
        } 
    }, [open, selectedCourse])

    return (
        <Dialog open={open} onClose={onClose}>
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
                    {isEdit ? "Edit" : "Add"} Course
                </p>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>
                    Fill up all the textfields with valid data to update a new
                    course.
                </p>
            </DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ marginTop: "16px" }}
                    error={title?.length < 3}
                />

                <TextField
                    margin="dense"
                    id="price"
                    label="Price"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    sx={{ marginTop: "16px" }}
                    error={price < 0 }
                />

                <TextField
                    margin="dense"
                    id="image-url"
                    label="Image Url"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    sx={{ marginTop: "16px" }}
                    error={!image?.includes("/images/writingExercise/")}
                    helperText={"/images/writingExercise/example.png"}
                />

                <TextField
                    margin="dense"
                    id="word-count"
                    label="Word Count Requirement"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={wordCount}
                    onChange={(e) => setWordCount(e.target.value)}
                    sx={{ marginTop: "16px" }}
                    error={wordCount < 0}
                />

                <TextField
                    margin="dense"
                    id="duration"
                    label="Duration (In minutes)"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    sx={{ marginTop: "16px" }}
                    error={duration < 0}
                />

                <TextField
                    margin="dense"
                    id="hints"
                    label="Hints (Separate by ';')"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={hints}
                    onChange={(e) => setHints(e.target.value)}
                    sx={{ marginTop: "16px" }}
                    error={hints?.length < 3}
                />

                <InputLabel sx={{ marginTop: "16px" }} id="course-level">
                    Level
                </InputLabel>
                <Select
                    labelId="course-level"
                    id="course-level"
                    fullWidth
                    variant="standard"
                    label="Level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <MenuItem value={"Beginner"}>Beginner</MenuItem>
                    <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"Advanced"}>Advanced</MenuItem>
                </Select>

                <textarea
                    id="sample-answer"
                    rows="4"
                    cols="50"
                    placeholder="Enter sample answer"
                    value={sampleAnswer}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setSampleAnswer(e.target.value)
                    }}
                    className={Styles.sample_answer}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} disabled={invalidCourse()}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CourseDialog;
