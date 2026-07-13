import { useState } from "react";

function TaskForm() {
  const [task, setTask] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button>Ajouter</button>
    </form>
  );
}

export default TaskForm;