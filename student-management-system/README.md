# Student Management System

A React-based Student Management System developed as **Web Technologies Lab Task 7**.

The project demonstrates the use of React components, props, state management, event handling, forms, hooks, and dynamic rendering to build an interactive student management interface.

## Lab Task

**Course:** Web Technologies
**Lab Task:** 7
**Technology:** React.js
**Build Tool:** Vite

## Features

* Display registered students in a table
* Add/register a new student
* Edit existing student information
* Delete a student
* Search students instantly
* Dynamically display the total number of students
* Automatically update the student list when data changes
* Responsive table layout
* Form validation using HTML `required` attributes

## Student Information

The system stores the following information for each student:

* Student Name
* Seat Number
* Semester
* Program
* Department
* Email

The **seat number** is used as the unique identifier for students.

## React Concepts Used

### Components

The application is divided into reusable components:

```text
src/
├── components/
│   ├── Header.jsx
│   ├── StudentForm.jsx
│   └── StudentList.jsx
│
├── App.jsx
└── main.jsx
```

### Props

Props are used to pass data and functions between components.


### State Management

React's `useState` hook is used to manage:

* Student records
* Current editing student
* Form data
* Search term

Example:

```jsx
const [students, setStudents] = useState([]);
```

### Adding Students

When the registration form is submitted, a new student object is created and added to the `students` state.

### Delete

Students are removed using JavaScript's `filter()` method.

The seat number is used to identify the student.

### Edit

The Edit feature uses a combination of:

* `editingStudent` state
* `useEffect`
* Controlled inputs
* `map()`

When Edit is clicked, the selected student's information is loaded into the form. After updating the information, the student is replaced in the array.

### Search

The project includes live student searching without a search button.

The search term is stored using state.

The table then displays the filtered results.

## User Interface

The application contains three main sections:

### 1. Header

Displays the title and basic information about the application.

### 2. Student Registration Form

Allows users to enter:

* Student name
* Seat number
* Semester
* Program
* Department
* Email

The same form is used for both **registration** and **editing**.

### 3. Registered Students

Displays all registered students in a table with:

* Student ID
* Student Name
* Seat Number
* Semester
* Program
* Department
* Email
* Edit and Delete actions

A search bar is also available for quickly finding students.

## Technologies Used

* **React.js** — Frontend library
* **JavaScript (ES6+)** — Application logic
* **HTML5** — Structure and forms
* **CSS3** — Styling and layout
* **Vite** — Development environment and build tool

## Installation and Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd student-management-system
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL provided by Vite in your browser.

## Project Structure

```text
student-management-system/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentList.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

## Learning Outcomes

Through this lab task, the following React concepts were practiced:

* Creating React components
* Component-based application structure
* Passing props
* Destructuring props
* Managing state using `useState`
* Using `useEffect`
* Handling form submission
* Handling input changes
* Controlled components
* Passing functions through props
* Dynamic rendering using `map()`
* Removing data using `filter()`
* Updating data using `map()`
* Implementing live search
* Conditional rendering
* Working with arrays of objects in React

## Conclusion

This project demonstrates how React can be used to create a dynamic and interactive Student Management System. Instead of using a static HTML table, the application manages student data through React state and automatically updates the user interface whenever students are added, edited, deleted, or searched.

