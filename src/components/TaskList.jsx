import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://corsproxy.io/?https://mnogolika.net/test/todos.json")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError("Ошибка загрузки данных");
      });
  }, []);

  if (loading) {
    return <p>загрузка...</p>;
  } else if (error != "") {
    return <p>{error}</p>;
  } else {
    return (
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li>Задач нет</li>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              
              state={task.completed}
            />
          ))
        )}
      </ul>
    );
  }
}

export default TaskList;
