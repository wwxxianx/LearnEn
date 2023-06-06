import React from "react";
import Styles from "./CourseCard.module.css"

function CourseCard({ className, course, enableDelete, onCourseClick, onDeleteClick }) {
    return (
        <div 
            className={Styles.container}
            onClick={onCourseClick}
        >
            {/* Card img */}
            <div 
                className={Styles.img}
                style={{ backgroundImage: `url(${course.image})`}}    
            >
                <h1 className={Styles.title}>{course.title}</h1>
            </div>

            {/* Card detail */}
            <div className={Styles.content}>
                <h1>{course.title}</h1>
                <p>
                    <span className="material-symbols-outlined">schedule</span>
                    {course?.estimateTime || course?.duration} mins
                </p>

                <div>
                    <p>{course.level}</p>
                    <p>
                        {course.price
                        ? course?.price === 0
                            ? "FREE"
                            : `RM${course.price}`
                            : ""}
                    </p>
                </div>

                {enableDelete && (
                    <button 
                        onClick={onDeleteClick}
                    >
                        <span className="material-symbols-rounded">delete</span>
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}

export default CourseCard;
