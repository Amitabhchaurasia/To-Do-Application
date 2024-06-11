// App.jsx
import Panel from "./AddPanel/Panel";
import "./App.css";

// The App component is the root component of the application.
function App() {
  return (
    // The component returns a fragment containing an h1 element and the Panel component.
    // The h1 element contains the title of the application and is centered using inline CSS.
    // The Panel component is responsible for managing the tasks.
    <>
      <h1 style={{ textAlign: "center" }}>To-Do Application</h1>
      <br />
      <Panel />
    </>
  );
}

// The App component is exported for use in other files.
export default App;