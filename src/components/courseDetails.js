// src/components/CourseDetails.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoursesAsync } from "../slices/coursesSlices";
import styles from "./CourseDetails.module.css";

function CourseDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) =>
    state.courses.list.find((course) => course.id === parseInt(id))
  );
  const status = useSelector((state) => state.courses.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCoursesAsync());
    }
  }, [status, dispatch]);

  if (status === "loading")
    return (
      <div
        styles={{
          height: "100vh",
          width: "100vw",
          margin: "0px 64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading Course Details...</h1>
      </div>
    );
  if (!course)
    return (
      <div
        styles={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Course Not Found.</h1>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.courseDetails}>
        <div className={styles.title}>
          <h1>{course.name}</h1>
        </div>
        <p className={styles.instructor}>Instructor: {course.instructor}</p>
        <p className={styles.description}>{course.description}</p>
        <p className={styles.enrollmentStatus}>
          Enrollment Status: {course.enrollmentStatus}
        </p>
        <p className={styles.duration}>Duration: {course.duration}</p>
        <p className={styles.schedule}>Schedule: {course.schedule}</p>
        <p className={styles.location}>Location: {course.location}</p>
        <div className={styles.prerequisites}>
          <h2>Pre-requisites:</h2>
          <ul>
            {course.prerequisites?.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>
        <div className={styles.syllabus}>
          <h2>Syllabus:</h2>
          {course.syllabus?.map((week, index) => (
            <div key={index} className={styles.syllabusWeek}>
              <h3>
                Week {week.week}: {week.topic}
              </h3>
              <p>{week.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
