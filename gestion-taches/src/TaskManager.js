import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";
function TaskManager() {
  const [task, setTask] = useState("");
  const { tasks, addTask, removeTask } = useContext(TaskContext);
  const handleAddTask = () => {
    if (task) {
      addTask(task);
      setTask("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={handleAddTask}>Ajouter Tâche</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => removeTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskManager;
