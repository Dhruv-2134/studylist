// src/slices/coursesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulating API call
const fetchCoursesAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1, // Unique identifier for the course
          name: "Introduction to React Native",
          instructor: "John Doe", // Name of the course instructor
          description:
            "Learn the basics of React Native development and build your first mobile app.",
          enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress',
          thumbnail: "your.image.here", //Link to the course thumbnail
          duration: "8 weeks", // Duration of the course
          schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: [
            "Basic JavaScript knowledge",
            "Familiarity with React",
          ],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to React Native",
              content:
                "Overview of React Native, setting up your development environment.",
            },
            {
              week: 2,
              topic: "Building Your First App",
              content:
                "Creating a simple mobile app using React Native components.",
            },
          ],
          likes: 0,
        },
        {
          id: 2,
          name: "Advanced React Development",
          instructor: "Jane Smith",
          description:
            "Take your React skills to the next level with this advanced course.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "12 weeks",
          schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: [
            "Intermediate JavaScript knowledge",
            "Experience with React",
          ],
          syllabus: [
            {
              week: 1,
              topic: "Advanced React Concepts",
              content: "In-depth look at React hooks, context, and more.",
            },
            {
              week: 2,
              topic: "State Management",
              content: "Managing complex state in React applications.",
            },
          ],
          likes: 0,
        },
        {
          id: 3,
          name: "Node.js Fundamentals",
          instructor: "Alex Johnson",
          description:
            "Learn the basics of Node.js and build your first server-side application.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "10 weeks",
          schedule: "Saturdays, 10:00 AM - 12:00 PM",
          location: "Online",
          prerequisites: ["Basic JavaScript knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Node.js",
              content:
                "Overview of Node.js, setting up your development environment.",
            },
            {
              week: 2,
              topic: "Building a REST API",
              content: "Creating a simple REST API using Express.js.",
            },
          ],
          likes: 0,
        },
        {
          id: 4,
          name: "Full-Stack Web Development",
          instructor: "Sarah Wilson",
          description:
            "Master the skills needed to become a full-stack web developer.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "16 weeks",
          schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: [
            "Intermediate JavaScript knowledge",
            "Experience with React",
          ],
          syllabus: [
            {
              week: 1,
              topic: "Building a Frontend",
              content:
                "Creating a responsive frontend using HTML, CSS, and JavaScript.",
            },
            {
              week: 2,
              topic: "Building a Backend",
              content:
                "Creating a server-side application using Node.js and Express.js.",
            },
          ],
          likes: 0,
        },
        {
          id: 5,
          name: "Python for Data Science",
          instructor: "Michael Brown",
          description:
            "Learn Python programming and data science concepts in this course.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "14 weeks",
          schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: ["Basic programming knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Python",
              content:
                "Overview of Python programming language and basic syntax.",
            },
            {
              week: 2,
              topic: "Data Analysis with Python",
              content:
                "Analyzing data using Python libraries like Pandas and NumPy.",
            },
          ],
          likes: 0,
        },
        {
          id: 6,
          name: "Machine Learning Fundamentals",
          instructor: "Jessica Lee",
          description:
            "Learn the basics of machine learning and build your first ML model.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "12 weeks",
          schedule: "Saturdays, 10:00 AM - 12:00 PM",
          location: "Online",
          prerequisites: ["Basic programming knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Machine Learning",
              content:
                "Overview of machine learning concepts and applications.",
            },
            {
              week: 2,
              topic: "Building a Machine Learning Model",
              content:
                "Creating a simple machine learning model using Python libraries.",
            },
          ],
          likes: 0,
        },
        {
          id: 7,
          name: "Cybersecurity Essentials",
          instructor: "David Miller",
          description:
            "Learn the fundamentals of cybersecurity and protect your digital assets.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "8 weeks",
          schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: ["Basic computer knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Cybersecurity",
              content:
                "Overview of cybersecurity concepts and best practices.",
            },
            {
              week: 2,
              topic: "Network Security",
              content:
                "Securing your network and protecting against cyber threats.",
            },
          ],
          likes: 0,
        },
        {
          id: 8,
          name: "AWS Cloud Computing",
          instructor: "Emily White",
          description:
            "Learn the basics of cloud computing and AWS services in this course.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "10 weeks",
          schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: ["Basic computer knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Cloud Computing",
              content:
                "Overview of cloud computing concepts and AWS services.",
            },
            {
              week: 2,
              topic: "AWS Services",
              content:
                "Exploring popular AWS services like EC2, S3, and RDS.",
            },
          ],
          likes: 0,
        },
        {
          id: 9,
          name: "Mobile App Design",
          instructor: "Daniel Brown",
          description:
            "Learn the principles of mobile app design and create user-friendly interfaces.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "8 weeks",
          schedule: "Saturdays, 10:00 AM - 12:00 PM",
          location: "Online",
          prerequisites: ["Basic design knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Mobile Design",
              content:
                "Overview of mobile design principles and user experience.",
            },
            {
              week: 2,
              topic: "Creating User Interfaces",
              content:
                "Designing user-friendly interfaces for mobile applications.",
            },
          ],
          likes: 0,
        },
        {
          id: 10,
          name: "Digital Marketing Fundamentals",
          instructor: "Laura Johnson",
          description:
            "Learn the basics of digital marketing and promote your brand online.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "6 weeks",
          schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: ["Basic marketing knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Digital Marketing",
              content:
                "Overview of digital marketing channels and strategies.",
            },
            {
              week: 2,
              topic: "Social Media Marketing",
              content:
                "Promoting your brand on social media platforms like Facebook and Instagram.",
            }
          ],
          likes: 0,
        },
        {
          id: 11,
          name: "UI/UX Design",
          instructor: "Olivia Smith",
          description:
            "Master the art of user interface and user experience design.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "10 weeks",
          schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: ["Basic design knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to UI/UX Design",
              content:
                "Overview of UI/UX design principles and best practices.",
            },
            {
              week: 2,
              topic: "Wireframing and Prototyping",
              content:
                "Creating wireframes and prototypes for web and mobile applications.",
            },
          ],
          likes: 0,
        },
        {
          id: 12,
          name: "Agile Project Management",
          instructor: "Mark Wilson",
          description:
            "Learn the Agile methodology and manage projects more efficiently.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "8 weeks",
          schedule: "Saturdays, 10:00 AM - 12:00 PM",
          location: "Online",
          prerequisites: ["Basic project management knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Agile",
              content:
                "Overview of Agile principles and the Scrum framework.",
            },
            {
              week: 2,
              topic: "Managing Agile Projects",
              content:
                "Planning and executing Agile projects using Scrum and Kanban.",
            },
          ],
          likes: 0,
        },
        {
          id: 13,
          name: "Data Visualization with Tableau",
          instructor: "Sophia Davis",
          description:
            "Learn to create interactive data visualizations using Tableau software.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "6 weeks",
          schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: ["Basic data analysis knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Tableau",
              content:
                "Overview of Tableau software and its data visualization capabilities.",
            },
            {
              week: 2,
              topic: "Creating Dashboards",
              content:
                "Building interactive dashboards to visualize data insights.",
            },
          ],
          likes: 0,
        },
        {
          id: 14,
          name: "SQL Database Management",
          instructor: "William Johnson",
          description:
            "Master the SQL language and manage relational databases.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "10 weeks",
          schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
          location: "Online",
          prerequisites: ["Basic database knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to SQL",
              content:
                "Overview of SQL language, querying databases, and data manipulation.",
            },
            {
              week: 2,
              topic: "Database Design",
              content:
                "Designing and creating relational databases using SQL.",
            },
          ],
          likes: 0,
        },
        {
          id: 15,
          name: "Blockchain Fundamentals",
          instructor: "Daniel Brown",
          description:
            "Learn the basics of blockchain technology and its applications.",
          enrollmentStatus: "Open",
          thumbnail: "your.image.here",
          duration: "8 weeks",
          schedule: "Saturdays, 10:00 AM - 12:00 PM",
          location: "Online",
          prerequisites: ["Basic programming knowledge"],
          syllabus: [
            {
              week: 1,
              topic: "Introduction to Blockchain",
              content:
                "Overview of blockchain technology and its use cases.",
            },
            {
              week: 2,
              topic: "Building a Blockchain",
              content:
                "Creating a simple blockchain application using JavaScript.",
            },
          ],
          likes: 0,
        }
      ]);
    }, 1000);
  });
};

export const fetchCoursesAsync = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetchCoursesAPI();
    return response;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: localStorage.getItem("courses")
      ? JSON.parse(localStorage.getItem("courses"))
      : [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateLikes: (state, action) => {
      const { courseId } = action.payload;
      const course = state.list.find((c) => c.id === courseId);
      if (course) {
        course.likes += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoursesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
        localStorage.setItem("courses", JSON.stringify(action.payload));
      })
      .addCase(fetchCoursesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateLikes } = coursesSlice.actions;
export default coursesSlice.reducer;
