import "./App.css";
import { TaskProvider } from "./TaskContext";
import TaskManager from "./TaskManager";

function App() {
  return (
    <TaskProvider>
      <div>
        <h1>Gestion des Tâches</h1>
        <TaskManager />
      </div>
    </TaskProvider>
  );
}

export default App;
