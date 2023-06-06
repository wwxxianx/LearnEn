import React, { useState, useEffect } from 'react';
import CourseCard from '../../components/CourseCard';
import Styles from './courses.module.css';
import Select from '../../components/Select';
import { useNavigate } from "react-router-dom";
import { allCourses } from '../../libs/courses';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Courses() {
    const [courses, setCourses] = useState(allCourses);
    const [activeButton, setActiveButton] = useState('All Topic');
    const [activeLevel, setActiveLevel] = useState('All Levels');
    const levels = ['All Level', 'Beginner', 'Intermediate', 'Advanced'];
    const navigate = useNavigate();
    const [animateContainer, enableAnimations] = useAutoAnimate(/* optional config */);

    function navigateToCourse(course) {
        console.log(`Clicked on course with id ${course.id}`);
        navigate(`/course/${course.id}`)
        // perform other actions here
    }

    useEffect(() => {
        setActiveButton("All Topic");
        setActiveLevel("All Level");
        setCourses(allCourses);
    }, []);


    function handleButton(type) {
        setActiveButton(type);
        if (type === "All Topic") {
            if (activeLevel === "All Level") {
                setCourses(allCourses);
            } else {
                setCourses(allCourses.filter(course => course.level === activeLevel));
            }
        } else if (activeLevel === "All Level") {
            setCourses(allCourses.filter(course => course.type === type));
        } else {
            setCourses(allCourses.filter(course => course.type === type && course.level === activeLevel));
        }
    }

    function handleSelect(event) {
        const value = event.target.value;
        setActiveLevel(value);
        if (activeButton === "All Topic") {
            if (value === "All Level") {
                setCourses(allCourses);
            } else {
                setCourses(allCourses.filter(course => course.level === value));
            }
        } else {
            if (value === "All Level") {
                setCourses(allCourses.filter(course => course.type === activeButton));
            } else {
                setCourses(allCourses.filter(course => course.type === activeButton && course.level === value));
            }
        }
    }


    return (
        <div className={Styles.container}>
            <div className={Styles.top_bar}>
                <h4>Courses</h4>
            </div>
            <div className={Styles.button_container}>
                <button className={`rounded ${activeButton === 'All Topic' ? 'primary_button' : 'secondary_button'}`}
                    onClick={() => handleButton('All Topic')}>
                    All Topic
                </button>
                <button className={`rounded ${activeButton === 'Grammar' ? 'primary_button' : 'secondary_button'}`}
                    onClick={() => handleButton('Grammar')}>
                    Grammar
                </button>
                <button className={`rounded ${activeButton === 'Adjective' ? 'primary_button' : 'secondary_button'}`}
                    onClick={() => handleButton('Adjective')}>
                    Adjective
                </button>
                <button className={`rounded ${activeButton === 'Adverb' ? 'primary_button' : 'secondary_button'}`}
                    onClick={() => handleButton('Adverb')}>
                    Adverb
                </button>
                <button className={`rounded ${activeButton === 'Reading' ? 'primary_button' : 'secondary_button'}`}
                    onClick={() => handleButton('Reading')}>
                    Verb
                </button>
                <button className={`rounded ${activeButton === 'Vocabulary' ? 'primary_button' : 'secondary_button'}`}
                    onClick={() => handleButton('Vocabulary')}>
                    Vocab
                </button>
                <button className={`rounded ${activeButton === 'Reading' ? 'primary_button' : 'secondary_button'}`}
                    onClick={() => handleButton('Reading')}>
                    Reading
                </button>
            </div>

            <div className={Styles.select_container}>
                <Select
                    title="Select Level"
                    label="level-filter-menu"
                    options={levels}
                    value={activeLevel}
                    onChange={handleSelect}
                    ariaLabel='Level filter options'
                    ariaControls='Level filter menu'
                />
            </div>

            <div ref={animateContainer} className={Styles.course_list}>
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onCourseClick={() => navigateToCourse(course)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Courses;