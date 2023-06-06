import { useEffect, useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import Styles from "./Course.module.css";
import { Fab } from '@mui/material';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export const Note = ({ mistakeNote=false, children }) => {
    return (
        <p className={`${mistakeNote ? Styles.mistake_note : Styles.attention_note}`}>
            {mistakeNote && <span><WarningRoundedIcon /></span> }
            {children}
        </p>
        )
}

const Question = ({ question, choices }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [footerText, setFooterText] = useState('Choose wisely');
    const [showFooter, setShowFooter] = useState(false)

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setShowFooter(false);
        setFooterText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value.includes('true')) {
            setFooterText('You got it!');
            setError(false);
        } else if (value.includes('false')) {
            setFooterText('Sorry, wrong answer!');
            setError(true);
        } else {
            setFooterText('Please select an option.');
            setError(true);
        }
        setShowFooter(true)
    };

    return (
        <form style={{width: '100%'}} onSubmit={handleSubmit}>
            <FormControl sx={{ width: '100%' }} error={error} variant="standard">
                <FormLabel
                    id="multiple-choice"
                    sx={{
                        fontSize: '16px',
                        color: '#2B3445',
                        fontWeight: '500'
                    }}>
                    {question}
                </FormLabel>
                <RadioGroup
                    aria-labelledby="multiple-choice"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                >
                    {choices.map((choice, index) => (
                        <FormControlLabel key={index} value={`${choice.isAnswer}-${index}`} control={<Radio />} label={choice.label} />
                    ))}
                </RadioGroup>
                <Button sx={{ mt: 1, mr: 1, maxWidth: '150px' }} type="submit" variant="outlined">
                    Check Answer
                </Button>
                {showFooter && (
                    <div style={{
                        width: '100%',
                        display: "flex",
                        gap: '6px',
                        alignItems: 'center',
                        fontSize: '14px',
                        padding: '8px',
                        marginBlock: '10px',
                        color: `${error ? '#DD0101' : '#1E7500'}`,
                        borderRadius: '8px',
                        border: '1px solid',
                        borderColor: `${error ? '#DD0101' : '#1E7500'}`,
                        backgroundColor: `${error ? '#FCE8E8' : '#E8FCEB'}`
                    }}>
                        {error ? <CancelRoundedIcon /> : <CheckCircleRoundedIcon />}
                        <p>{footerText}</p>
                    </div>
                )}
            </FormControl>
        </form>
    );
}

const Course = () => {
    const { title } = useParams();
    const [toc, setToc] = useState([]);
    const [course] = useLoaderData();
    const navigate = useNavigate();

    //Get all the headings tag, set the TOC
    useEffect(() => {
        const headings = document.querySelectorAll('h1, h2, h3')
        const toc = []
        headings.forEach((heading) => {
            const id = heading.getAttribute('id');
            const label = heading.textContent
            toc.push({ id, label })
        })
        setToc(toc)
    }, [])

    const handleAnchorClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            })
    }

    const navigateToCourse = (courseId) => {
        navigate(`/course/${courseId}`)
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    sx={{
                        position: "fixed",
                        bottom: "24px",
                        right: "19px",
                        minwidth: "max-content",
                        borderradius: "99px",
                        padding: "24px 16px",
                        transition: "all ease-in-out 0.2s",
                    }}
                    onClick={scrollToTop}
                >
                    <NavigationRoundedIcon sx={{ mr: 1 }} />
                    scroll to top
                </Fab>
                <ul className={Styles.sidebar_toc}>
                    {toc.map((item) => (
                        <li className={Styles.toc_item}>
                            <a
                                onClick={() => {
                                    handleAnchorClick(item.id);
                                }}
                            >
                                • {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={Styles.content_container}>
                    {/* Tutorial */}
                    <div className={Styles.tutorial_container}>
                        {course.tutorialContent}
                    </div>

                    {/* Questions */}
                    {course.questions && course.questions.length && (
                        <div className={Styles.qa_container}>
                            <h1 id="exercises">Exercises</h1>
                            {course.questions.map((question, index) => (
                                <Question
                                    key={index}
                                    question={question.question}
                                    choices={question.choices}
                                />
                            ))}
                        </div>
                    )}

                    {/* Prev & Next Course */}
                    <div className={Styles.link_container}>
                        {course.previous && (
                            <div
                                className={Styles.previous_link}
                                onClick={() => navigateToCourse(course.previous)}
                            >
                                <ArrowBackIosRoundedIcon />
                                <div>
                                    <p>PREVIOUS COURSE</p>
                                    <h4>{course.previous}</h4>
                                </div>
                            </div>
                        )}
                        {course.next && (
                            <div
                                className={Styles.next_link}
                                onClick={() => navigateToCourse(course.next)}
                            >
                                <div>
                                    <p>NEXT COURSE</p>
                                    <h4>{course.next}</h4>
                                </div>
                                <ArrowForwardIosRoundedIcon />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Course
