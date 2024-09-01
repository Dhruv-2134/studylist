import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch} from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import Course_Animation from "../assets/course_animation.json";
import { fetchCoursesAsync } from "../slices/coursesSlices";
import styles from "./StudentDashboard.module.css";

function StudentDashboard() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.list);
  const [enrolledCourses, setEnrolledCourses] = useState(
    courses.map((course) => ({ ...course, progress: 0, completed: false }))
  );
  const status = useSelector((state) => state.courses.status);

  const animationRefs = useRef({});

  const handleMarkCompleted = (courseId) => {
    toast((t) => (
      <div
        style={{
          width: "300px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "16px",
          gap: "50px",
          fontSize: "14px",
          fontWeight: "700",
          backgroundColor: "white",
          border: "1px solid rgba(0, 0, 0, 0.351)",
          boxShadow:
            "0 0 0 1px rgba(14, 12, 12, 0.32), 0 2px 4px rgba(0, 0, 0, 0.374), 0 4px 8px rgba(0, 0, 0, 0.445) 0 8px 16px rgba(23, 23, 23, 0.322), 0 16px 32px rgba(14, 13, 13, 0.324)",
        }}
      >
        <p>Are you sure you want to mark this course as completed?</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              height: "50px",
              width: "70px",
              borderRadius: "10px",
              fontSize: "12px",
            }}
            onClick={() => {
              setEnrolledCourses((prevCourses) =>
                prevCourses.map((course) =>
                  course.id === courseId
                    ? { ...course, completed: true, progress: 100 }
                    : course
                )
              );
              toast.dismiss(t.id);
              toast.success("Course marked as completed", {
                style: {
                  border: "1px solid #713200",
                  padding: "14px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#000000",
                },
                iconTheme: {
                  primary: "#713200",
                  secondary: "#FFFAEE",
                },
              });
              // Play the animation for the completed course
              if (animationRefs.current[courseId]) {
                animationRefs.current[courseId].play();
              }
            }}
          >
            YES
          </button>
          <button
            style={{
              height: "50px",
              width: "70px",
              borderRadius: "10px",
              fontSize: "16px",
            }}
            onClick={() => {
              toast.dismiss(t.id);
              toast.error("Course not marked as completed", {
                style: {
                  border: "1px solid #713200",
                  padding: "16px",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#000000",
                },
                iconTheme: {
                  primary: "#713200",
                  secondary: "#FFFAEE",
                },
              });
            }}
          >
            NO
          </button>
        </div>
      </div>
    ));
  };

  const handleUpdateProgress = (courseId, progress) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? { ...course, progress: Math.min(progress, 100) }
          : course
      )
    );
  };

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
          marginLeft: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Courses are being Loaded so Dashboard is not visible. </h1>
      </div>
    );

  return (
    <div className={styles.dashboard}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={styles.dashtitle}>
        <h1>Student Dashboard</h1>
      </div>
      <div className={styles.courseList}>
        {enrolledCourses.map((course) => (
          <div key={course.id} className={styles.courseItem}>
            <div className={styles.heading}>
              <h2>{course.name}</h2>
              <Lottie
                lottieRef={(el) => animationRefs.current[course.id] = el}
                animationData={Course_Animation}
                className={styles.animation}
                autoplay={false}
                loop={false}
              />
            </div>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
            <p>Enrollment Status: {course.enrollmentStatus}</p>
            <p>Progress: {course.progress}%</p> 
            <progress
              value={course.progress}
              max="100"
              className={styles.progressBar}
            ></progress>
            <input
              type="number"
              min="0"
              max="100"
              value={course.progress}
              onChange={(e) =>
                handleUpdateProgress(course.id, parseInt(e.target.value))
              }
              className={styles.progressInput}
            />
            <button
              onClick={() => handleMarkCompleted(course.id)}
              disabled={course.completed}
              className={styles.completeButton}
            >
              {course.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;