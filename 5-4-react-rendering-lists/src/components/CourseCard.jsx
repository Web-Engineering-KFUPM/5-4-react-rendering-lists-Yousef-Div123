import { useState } from "react";
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function toggleTask(id) {
   
  }

  function deleteTask(id) {
    
  }

  function addTask(e) {
    e.preventDefault();
   
  }

  const allTasksDone = course.tasks.every(task => task.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>
        {allTasksDone && <span>All caught up</span>}
      </header>

      <ul className="tasks">
        {course.tasks.lenght?course.tasks.map((task)=>{
          <TaskItem 
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        }): <span>No tasks yet. Add your first one below.</span>}
      </ul>

    
      <form onSubmit={addTask} className="newTask">
        <input
          className="titleField"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title"
          aria-label="Task title"
        />
        <div className="dateRow">
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            aria-label="Due date"
          />
          <button type="submit" className="primary">Add</button>
        </div>
      </form>
    </article>
  );
}
