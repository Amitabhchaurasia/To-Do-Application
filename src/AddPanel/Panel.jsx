// Panel.jsx
import "./style.css";
import List from "../ListPanel/List";
import Modal from "../Modal/Modal";
import { useState } from "react";

// The Panel component is the main component of the application.
// It manages the state of the tasks and handles the logic for adding, editing, viewing, deleting, and completing tasks.
function Panel() {
  // State variables are declared for the tasks, the new task input, the editing mode, the current task being edited, the task being viewed, the visibility of the modal, and the completion status of tasks.
  const [todoData, setTodoData] = useState([]);
  const [newTodoData, setNewTodoData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [viewedTask, setViewedTask] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false); 

  // The handleClick function handles adding and updating tasks.
  function handleClick() {
    if (newTodoData !== "" && !isEditing) {
      const newData = { d: newTodoData, completed: false }; 
      setTodoData((prevData) => [...prevData, newData]);
      setNewTodoData("");
    } else if (newTodoData !== "" && isEditing) {
      const newData = [...todoData];
      newData[currentTask].d = newTodoData;
      setTodoData(newData);
      setNewTodoData("");
      setIsEditing(false);
    } else {
      alert("Enter Task");
    }
  }

  // The handleView function handles viewing tasks.
  function handleView(index) {
    setViewedTask(todoData[index].d);
    setIsModalVisible(true);
  }

  // The handleEdit function handles editing tasks.
  function handleEdit(index) {
    setIsEditing(true);
    setCurrentTask(index);
    setNewTodoData(todoData[index].d);
  }

  // The handleDelete function handles deleting tasks.
  function handleDelete(index) {
    setTodoData((prevData) => prevData.filter((_, i) => i !== index));
  }

  // The handleCloseModal function handles closing the modal.
  function handleCloseModal() {
    setIsModalVisible(false);
  }

  // The completeTask function handles completing tasks.
  const completeTask = (index) => { 
    setTodoData(prevData => prevData.map((item, i) => i === index ? {...item, completed: !item.completed} : item));
  };

  // The component returns a div with an input and a button for adding tasks, a list of tasks, and a modal for viewing tasks.
  return (
    <>
      <div className="panel">
        <input
          type="text"
          placeholder="ADD NEW TASK"
          value={newTodoData}
          onChange={(e) => setNewTodoData(e.target.value)}
        />
        <button onClick={handleClick}>{isEditing ? "Update" : "Add"}</button>
      </div>
      <div className="dataCont">
        {todoData.map((item, index) => (
          <List
            key={index}
            task={item.d}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
            onView={() => handleView(index)}
            onComplete={() => completeTask(index)} 
            isCompleted={item.completed} 
          />
        ))}
      </div>
      {isModalVisible && <Modal task={viewedTask} onClose={handleCloseModal} />}
    </>
  );
}

// The Panel component is exported for use in other files.
export default Panel;