import React, { useState } from 'react';
function TodoList() {
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);
const handleAddTask = () => {
if (task.trim()) {
setTasks([...tasks, task]);
setTask(''); // Clear the input field
}
};
const handleDeleteTask = (index) => {
const newTasks = tasks.filter((_, i) => i !== index);
setTasks(newTasks);
};
return (
<div>
<h1>Liste des tâches</h1>
<input
type="text"
value={task}
onChange={(e) => setTask(e.target.value)}
placeholder="Ajouter une tâche"
/>
<button onClick={handleAddTask}>Ajouter</button>
<ul>
{tasks.map((task, index) => (
<li key={index}>
{task}
<button onClick={() =>
handleDeleteTask(index)}>Supprimer</button>
</li>
))}
</ul>
</div>
);
}
export default TodoList;