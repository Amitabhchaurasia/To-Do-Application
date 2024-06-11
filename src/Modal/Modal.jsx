// Modal.jsx
import "./style.css";

// The Modal component displays a task and a close button.
// It receives two props: the task to display and a function to call when the close button is clicked.
function Modal({ task, onClose }) {
  return (
    // The modal is a div with a class of "modal".
    <div className="modal">
      {/* // The task is displayed in an h4 element. */}
      <h4>{task}</h4>
      {/* // The close button calls the onClose function when clicked. */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

// The Modal component is exported for use in other files.
export default Modal;