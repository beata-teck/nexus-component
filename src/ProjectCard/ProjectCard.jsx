import { Users, Calendar } from "lucide-react"
import "./ProjectCard.css"

export function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.name}</h3>
      </div>

      <div className="project-content">
        <p className="project-description">{project.description}</p>

        <div className="project-meta">
          <div className="meta-item">
            <Users className="meta-icon" />
            <span>{project.teamSize} members</span>
          </div>
          <div className="meta-item">
            <Calendar className="meta-icon" />
            <span>{new Date(project.dueDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}