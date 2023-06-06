import React, { useState, useEffect, useMemo } from "react";
import Styles from "./Writings.module.css";
import CourseCard from "../../components/CourseCard";
import { useNavigate } from "react-router-dom";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import CourseSkeleton from "../../components/CourseSkeleton/index";

const Level = {
    BEGINNER: "Beginner",
    INTERMEDIATE: "Intermediate",
    ADVANCED: "Advanced",
};

function Writings() {
    // Use to store the fetched data
    const [allWritingExercises, setAllWritingExercises] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [animateContainer, enableAnimations] = useAutoAnimate(/* optional config */);

    const filteredExercises = useMemo(() => {
        if (selectedLevel.toLowerCase() === 'all') {
            return allWritingExercises;
        }
        return allWritingExercises.filter(exercise => {
            return exercise.level.toLowerCase() === selectedLevel.toLowerCase()
        })
    }, [allWritingExercises, selectedLevel])

    const fetchWritingExercises = () => {
        fetch('/api/writingExercise')
            .then(res => res.json())
            .then(result => setAllWritingExercises(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    const handleCourseClick = (exercise) => {
        navigate(`/writing/${exercise.exerciseId}`);
    };

    const handleFilterLevel = (level) => {
        setSelectedLevel(level);
    }

    useEffect(() => {
        setSelectedLevel("all");
        fetchWritingExercises();
    }, [])

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <div className={Styles.filter_container}>
                    <button
                        className={`rounded ${selectedLevel === 'all' ? 'primary_button' : 'secondary_button'}`}
                        onClick={() => handleFilterLevel('all')}
                    >
                        All Levels
                    </button>

                    {Object.values(Level).map((level) => (
                        <button
                            className={`rounded ${selectedLevel === level ? 'primary_button' : 'secondary_button'}`}
                            onClick={() => handleFilterLevel(level)}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                <section ref={animateContainer} className={Styles.content}>
                    {/* Writing Exercises */}
                    {isLoading ? (
                        <CourseSkeleton />
                    ): filteredExercises?.map((exercise) => (
                        <CourseCard
                            course={exercise}
                            onCourseClick={() => handleCourseClick(exercise)}
                        />
                    ))}

                </section>
            </div>
        </div>
    );
}

export default Writings;
