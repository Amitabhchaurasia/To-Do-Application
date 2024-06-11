# 📝 Todo Application

## Overview

This Todo Application is a simple and user-friendly tool to manage your daily tasks. It allows you to add, edit, delete, view, and mark tasks as complete. The application is built with React and demonstrates the use of functional components, hooks, and state management.

## Features

- ➕ **Add New Tasks**: Enter tasks and add them to the list.
- ✏️ **Edit Tasks**: Update existing tasks.
- 🗑️ **Delete Tasks**: Remove tasks from the list.
- 👀 **View Tasks**: View task details in a modal.
- ✅ **Complete Tasks**: Mark tasks as complete or incomplete.

## Installation

### Prerequisites

- 📦 Node.js (v14 or later)
- 📦 npm (v6 or later)

### Steps

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/todo-application.git
    cd todo-application
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Start the Application:**
    ```bash
    npm start
    ```

The application will start running at `http://localhost:3000`.

## Project Structure

 ```bash
todo-application/
├── public/
├── src/
│   ├── AddPanel/
│   │   ├── Panel.jsx
│   │   ├── style.css
│   ├── ListPanle/
│   │   ├──List.jsx
│   │   ├──style.css
│   ├── Modal/
│   │   ├──Modal.jsx
│   │   ├──style.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
├── package.json
└── README.md
```
# 📁 Files and Directories

- **public/**: Contains the static assets.
- **src/**: Contains the source code.
  - **AddPanel/**: Contains components related to adding tasks.
    - **Panel.jsx**: Component for adding tasks.
    - **style.css**: Styles for the adding panel.
  - **ListPanel/**: Contains components related to displaying tasks.
    - **List.jsx**: Component for displaying individual tasks.
    - **style.css**: Styles for the task list.
  - **Modal/**: Contains components related to modal functionality.
    - **Modal.jsx**: Component for displaying a modal with task details.
    - **style.css**: Styles for the modal.
  - **App.jsx**: Main application component.
  - **main.jsx**: Entry point of the application.
  - **App.css**: Global styles for the application.



