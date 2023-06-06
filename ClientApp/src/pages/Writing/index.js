import React, { useEffect, useState } from "react";
import Styles from "./Writing.module.css";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTimer } from "react-timer-hook";
import IconButton from "../../components/IconButton";
import RestartIcon from "../../assets/icons/restart.svg";
import PauseIcon from "../../assets/icons/pause.svg";
import ResumeIcon from "../../assets/icons/resume.svg";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { toast } from "react-hot-toast";
import useAuthStore from "../../stores/authStore";
import Avatar from '@mui/material/Avatar';
import AvatarImage from "../../assets/Avatar-1.png";
import ReactMarkdown from 'react-markdown';
import { useRef } from "react";

function Timer({ expiryTimestamp, duration }) {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, autoStart: false });

    return (
        <div className={Styles.timer_wrapper}>
            <div className={Styles.timer}>
                <div>
                    <p>Hours:</p>
                    <p className={Styles.time}>{hours}</p>
                </div>

                <div>
                    <p>Minutes:</p>
                    <p className={Styles.time}>{minutes}</p>
                </div>

                <div>
                    <p>Seconds:</p>
                    <p className={Styles.time}>{seconds}</p>
                </div>
            </div>
            <div className={Styles.timer_function}>
                <IconButton
                    iconUrl={isRunning ? PauseIcon : ResumeIcon}
                    onClick={() => {
                        if (isRunning) {
                            pause();
                        } else {
                            resume();
                        }
                    }}
                />
                <IconButton
                    iconUrl={RestartIcon}
                    onClick={() => {
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + duration);
                        restart(time);
                    }}
                />
            </div>
        </div>
    );
}

function Editor({ editorInstance }) {
    // Renders the editor instance using a React component.
    return <BlockNoteView editor={editorInstance} />
};

function WritingExercise() {
    const authStore = useAuthStore();
    const editor = useBlockNote({});
    const timeLeft = new Date();
    const sampleRef = useRef(null);
    const [exercise] = useLoaderData();
    const [exerciseAnswers, setExerciseAnswers] = useState([]);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    timeLeft.setSeconds(timeLeft.getSeconds() + exercise?.duration * 60);

    const scrollToSample = () => {
        sampleRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }

    const handleAnswerSubmit = async () => {
        if (!authStore.isAuthenticated || authStore.userRole !== 'user') {
            toast.error("Please Login to your account to submit answer")
            return;
        }
        const answer = await editorText();
        toast.promise(
            fetch('/api/writingExercise/submitAnswer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    CustomerId: authStore.userId,
                    ExerciseId: exercise.exerciseId,
                    Answer: answer
                })
            })
                .then(res => res.json())
                .then(result => { })
                .catch(err => toast.error(err)),
            {
                loading: 'Submitting...',
                success: 'You answer has been submitted',
                error: 'Something went wrong!'
                }
        )
    }

    const editorText = async () => {
        try {
            const markdownText = await editor.blocksToMarkdown(editor.topLevelBlocks);
            return markdownText;
        } catch (err) {
            toast.error("Something went wrong!");
        }
    }

    useEffect(() => {
        // Load the answers
        fetch(`/api/writingExercise/${exercise.exerciseId}/answers`)
            .then(res => res.json())
            .then(result => setExerciseAnswers(result))
            .catch(err => console.log(err))
            
    }, [exercise])

    useEffect(() => {
        // Update button status
        editor?.blocksToMarkdown(editor?.topLevelBlocks)
            .then(res => {
                if (res.length > 10) {
                    setIsSubmitDisabled(false);
                }
            })
    }, [editor, editor?.topLevelBlocks])

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <h4 className={Styles.title}>Academic Writing - Graph Writing / Story Telling</h4>
                <div className={Styles.content_wrapper}>
                    <div>
                        <section>
                            {/* Picture & Answer */}
                            <h5 className={Styles.picture_title}>Story - {exercise?.title}</h5>
                            {exercise?.image && (
                                <img
                                    className={Styles.picture}
                                    src={exercise?.image}
                                    alt="Story image"
                                />
                            )}
                        </section>

                        <section>
                            <h5>Your Answer</h5>
                            <div>
                                <Editor editorInstance={editor} />
                            </div>

                            <button
                                onClick={handleAnswerSubmit}
                                className={`${Styles.submit_button} secondary_button rounded`}
                                disabled={isSubmitDisabled}
                            >
                                <p className="f-7">Submit</p>
                            </button>
                        </section>
                    </div>

                    <div className={Styles.accordion}>
                        {/* Accordion */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="instruction"
                                id="instruction-header"
                            >
                                <p className={Styles.accordion_title}>
                                    Instruction
                                </p>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                }}
                            >
                                <p>
                                    Look at the pictures provided and summarise
                                    the information by selecting and reporting
                                    the main features, and make comparisons
                                    where relevant.
                                </p>
                                <p>
                                    Write your story in{" "}
                                    <b style={{ fontWeight: "bold" }}>
                                        {exercise?.wordCount} words
                                    </b>{" "}
                                    or more.
                                </p>
                                <p>
                                    You should spend about{" "}
                                    <b style={{ fontWeight: "bold" }}>
                                        {exercise?.duration} minutes
                                    </b>{" "}
                                    on this task.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="help"
                                id="help-header"
                            >
                                <p className={Styles.accordion_title}>
                                    Need Help?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                }}
                            >
                                <ul>
                                    {exercise?.hints &&
                                        exercise.hints.length &&
                                        exercise.hints.split(";").map((hint) => (
                                            <li className={Styles.hint}>
                                                {hint}
                                            </li>
                                        ))}
                                </ul>
                                <button
                                    onClick={scrollToSample}
                                    style={{ width: "fit-content" }}
                                    className="secondary_button rounded"
                                >
                                    See Sample Answer
                                </button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="timer"
                                id="timer-header"
                            >
                                <p className={Styles.accordion_title}>Timer</p>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                }}
                            >
                                <Timer
                                    expiryTimestamp={timeLeft}
                                    duration={exercise?.duration * 60}
                                />
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>

                {/*Sample Answer*/}
                <section className={Styles.answer_container}>
                    <p>Answers from LearnEn learners</p>
                    <div ref={sampleRef} className={Styles.answer}>
                        <Avatar
                            src={AvatarImage}
                            alt="Avatar image"
                        />
                        <div className={Styles.answer_text}>
                            <h2>Sample Answer:</h2>
                            <p>{exercise?.sample}</p>
                        </div>
                    </div>
                    {exerciseAnswers?.map((answer) => (
                        <div className={Styles.answer}>
                            <Avatar
                                src={AvatarImage}
                                alt="Avatar image"
                            />
                            <div className={Styles.answer_text}>
                                <ReactMarkdown>
                                    {answer.answer}
                                </ReactMarkdown>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default WritingExercise;
