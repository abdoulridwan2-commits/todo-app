import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;