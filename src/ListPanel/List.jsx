// List.jsx
import "./style.css";

// The List component represents a single task.
// It receives several props: the task itself, functions to handle deleting, editing, viewing, and completing the task, and a boolean indicating whether the task is completed.
function List({ task, onDelete, onEdit, onView, onComplete, isCompleted }) {
  return (
    // The component is a div with a class of "list".
    <div className="list">
      {/* // The task is displayed in an h4 element.
      // If the task is completed, the h4 element also has a class of "completed".
      // When the h4 element is clicked, the onView function is called with the task as an argument. */}
      <h4 className={`task ${isCompleted ? "completed" : ""}`} onClick={() => onView(task)}>{task}</h4>
      {/* // The Delete button calls the onDelete function when clicked. */}
      <button onClick={onDelete}>Delete</button>
      {/* // The Edit button calls the onEdit function when clicked. */}
      <button onClick={onEdit}>Edit</button>
      {/* // The View button also calls the onView function with the task as an argument when clicked. */}
      <button onClick={() => onView(task)}>View</button>
      {/* // The Complete button calls the onComplete function when clicked. */}
      <button onClick={onComplete}>Complete</button>
    </div>
  );
}

// The List component is exported for use in other files.
export default List;