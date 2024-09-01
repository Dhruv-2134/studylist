// src/components/CourseList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCoursesAsync, updateLikes } from '../slices/coursesSlices';
import styles from './CourseList.module.css';

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.list);
  const status = useSelector(state => state.courses.status);
  const error = useSelector(state => state.courses.error);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCoursesAsync());
    }
  }, [status, dispatch]);

  const filteredCourses = courses.filter(course =>
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
      {status === 'loading' && <div styles={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}><h1>Loading courses...</h1></div>}
      {status === 'succeeded' && (
        <div className={styles.courseList}>
          {filteredCourses.map(course => (
            <div key={course.id} className={styles.courseItem}>
              <Link to={`/course/${course.id}`} className={styles.courseCard}>
                <h2>{course.name}</h2>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <p>Enrollment Status: {course.enrollmentStatus}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
      {status === 'failed' && <div>Error loading courses: {error}</div>}
      {filteredCourses.length === 0 && status === 'succeeded' && (
        <div>No courses found matching your search.</div>
      )}
    </div>
  );
}

export default CourseList;