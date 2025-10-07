import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task" key={task.id}>
      <label className="taskMain">
        {task.title}
      </label>
      {!task.isDone && <DueBadge dueDate={task.dueDate} />}

      <input type="checkbox" onChange={onToggle(task.id)} />
     
      <button className="ghost" aria-label="Delete task" onClick={onDelete}>
        ✕
      </button>
    </li>
  );
}
