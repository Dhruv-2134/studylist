// src/components/CourseList.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCoursesAsync, updateLikes } from "../slices/coursesSlices";
import styles from "./CourseList.module.css";

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.list);
  const status = useSelector((state) => state.courses.status);
  const error = useSelector((state) => state.courses.error);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCoursesAsync());
    }
  }, [status, dispatch]);

  const handleLike = (courseId) => {
    dispatch(updateLikes({ courseId }));
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Available Courses</h1>
      </div>
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      {status === "loading" && (
        <div
          styles={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading courses...</h1>
        </div>
      )}
      {status === "succeeded" && (
        <div className={styles.courseList}>
          {filteredCourses.map((course) => (
            <div key={course.id} className={styles.courseItem}>
              <Link to={`/course/${course.id}`} className={styles.courseCard}>
                <h2>{course.name}</h2>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <p>Enrollment Status: {course.enrollmentStatus}</p>
                {/* <p>Likes: {course.likes}</p> */}
              </Link>
              <button className={styles.Btn} onClick={() => handleLike(course.id)}>
                <span className={styles.leftContainer}>
                  <svg
                    fill="white"
                    viewBox="0 0 512 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
                  </svg>
                  <span className={styles.like}>Likes</span>
                </span>
                <span className={styles.likeCount}>{course.likes}</span>
              </button>
            </div>
          ))}
        </div>
      )}
      {status === "failed" && (
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
          Error loading courses: {error}
        </div>
      )}
      {filteredCourses.length === 0 && status === "succeeded" && (
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
          No courses found matching your search.
        </div>
      )}
    </div>
  );
}

export default CourseList;
