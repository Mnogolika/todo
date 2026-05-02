import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      title: text,
    };
    fetch("todos.json").then((response) => response.json);
    // .then((data)=> data.push(newTask))
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TaskForm buttonFunction={addTask} />
                <TaskList tasks={tasks} onDelete={removeTask} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <p>Данное приложение является простеньким списком задач</p>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
