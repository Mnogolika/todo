function TaskItem({ title, state, onDelete }) {
  return (
    <li className="task-item">
      {title}
      <div className="task-item__control">
        <div
          className="task-item__state"
          style={{ backgroundColor: state ? "lime" : "cyan" }}
        ></div>
        <button type="delete" onClick={onDelete}>
          Удалить
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
