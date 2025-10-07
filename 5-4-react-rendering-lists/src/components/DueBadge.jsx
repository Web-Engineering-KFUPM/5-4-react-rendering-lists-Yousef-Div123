function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0,0,0,0);
  due.setHours(0,0,0,0);
  const diff = Math.round((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}

export default function DueBadge({ dueDate }) {
  const d = daysUntil(dueDate)
 
  return <>
    {d < 0?<span className="badge danger">Overdue</span>:
    d === 0?<span className="badge warn">Due today</span>:
    d === 1?<span className="badge">1 day remaining</span>:
    `${d} days remaining`  
    }
  </>;
}
