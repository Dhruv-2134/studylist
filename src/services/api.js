// src/services/api.js
import axios from 'axios';

const API_URL = 'https://mock-api.example.com/courses'; // Replace with your actual API URL

export const fetchCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const fetchCourseDetails = async (courseId) => {
  try {
    const response = await axios.get(`${API_URL}/${courseId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course details for id ${courseId}:`, error);
    throw error;
  }
};

export const updateCourseLikes = async (courseId, likes) => {
  try {
    const response = await axios.patch(`${API_URL}/${courseId}`, { likes });
    return response.data;
  } catch (error) {
    console.error(`Error updating likes for course id ${courseId}:`, error);
    throw error;
  }
};