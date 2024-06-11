// Modal.jsx
import "./style.css";

function Modal({ task, onClose }) {
  return (
    <div className="modal">
      <h4>{task}</h4>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;