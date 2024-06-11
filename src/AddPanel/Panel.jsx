// Panel.jsx
import "./style.css";
import List from "../ListPanel/List";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Panel() {
  const [todoData, setTodoData] = useState([]);
  const [newTodoData, setNewTodoData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [viewedTask, setViewedTask] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false); 

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

  function handleView(index) {
    setViewedTask(todoData[index].d);
    setIsModalVisible(true);
  }

  function handleEdit(index) {
    setIsEditing(true);
    setCurrentTask(index);
    setNewTodoData(todoData[index].d);
  }

  function handleDelete(index) {
    setTodoData((prevData) => prevData.filter((_, i) => i !== index));
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  const completeTask = (index) => { 
    setTodoData(prevData => prevData.map((item, i) => i === index ? {...item, completed: !item.completed} : item));
  };

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

export default Panel;