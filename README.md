# React User Management App

This is a simple React application for managing user data. It allows for CRUD (Create, Read, Update, Delete) operations on user records using Axios to interact with a mock API.

## Features

- Fetch and display user data from a mock API.
- Add new users.
- Edit existing users.
- Delete users.
- Responsive and professional UI design.

## Mock API

The mock API used in this project is [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), which provides a list of users with their details.

## Technologies Used

- React
- Vite
- Axios
- CSS

Project Structure

react-user-management-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── UserForm.jsx
│   │   └── UserList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

Components
UserList.jsx: Displays the list of users with edit and delete buttons.
UserForm.jsx: A form to add or edit user information.
Main Files
App.jsx: The main component that handles fetching data from the API and managing the state for users.
main.jsx: Entry point for the React application.
styles.css: Contains the styles for the application.
