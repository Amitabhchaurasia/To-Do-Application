// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// The main.jsx file is the entry point of the application.
// It imports the React library, the ReactDOM library, and the root App component.

// The ReactDOM.createRoot method is used to create a root for the React application.
// The root is attached to an HTML element with the id of 'root'.
// The render method is then called on the root to render the App component inside a React.StrictMode component.
// React.StrictMode is a wrapper component that checks for potential problems in the application during the development build.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);