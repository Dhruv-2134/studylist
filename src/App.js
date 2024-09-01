// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store'; // Make sure this path is correct
import Layout from './components/Layout';
import CourseList from './components/courseList';
import StudentDashboard from './components/studentDashboard';
import CourseDetails from './components/courseDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/course/:id" element={<CourseDetails />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;