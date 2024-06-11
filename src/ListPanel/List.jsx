// List.jsx
import "./style.css";

function List({ task, onDelete, onEdit, onView, onComplete, isCompleted }) {
  return (
    <div className="list">
      <h4 className={`task ${isCompleted ? "completed" : ""}`} onClick={() => onView(task)}>{task}</h4>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => onView(task)}>View</button>
      <button onClick={onComplete}>Complete</button>
    </div>
  );
}

export default List;