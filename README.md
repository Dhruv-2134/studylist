# Student Dashboard

The Student Dashboard is a React component that provides an interface for students to view and manage their enrolled courses. It integrates with a Redux store to fetch the course data and allows users to update their progress and mark courses as completed.

## Tech Stack

- React
- Redux
- react-hot-toast
- Lottie-react
- CSS Modules

## Components

### `StudentDashboard`

The main component that renders the student dashboard. It includes the following features:

- Displays a list of enrolled courses with their details (name, instructor, duration, enrollment status, progress, and completion status).
- Allows users to update the progress for each course by entering a numerical value.
- Provides a "Mark as Completed" button that triggers a confirmation toast before updating the course status.
- Integrates with Lottie animations to play a course completion animation when a course is marked as completed.

### `Toaster`

The `Toaster` component is integrated into the `StudentDashboard` component to display confirmation and error toasts when interacting with the course completion functionality.

## Running the Project Locally

To run the Student Dashboard project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/student-dashboard.git
```

2. Navigate to the project directory:

```
cd student-dashboard
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

This will start the development server and open the application in your default web browser. Any changes you make to the code will automatically trigger a reload in the browser.

## Deployment

To build and deploy the Student Dashboard, you can run the following command:

```
npm run build
```

This will create an optimized production build of the application in the `build` folder. You can then deploy the contents of the `build` folder to your preferred hosting service.