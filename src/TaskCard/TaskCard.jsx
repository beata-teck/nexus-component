import { Calendar, User } from "lucide-react"
import "./TaskCard.css"

export function TaskCard({ task }) {
  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
      </div>

      <div className="task-content">
        <p className="task-description">{task.description}</p>

        <div className="task-meta">
          <div className="meta-item">
            <User className="meta-icon" />
            <span>{task.assignee}</span>
          </div>
          <div className="meta-item">
            <Calendar className="meta-icon" />
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}