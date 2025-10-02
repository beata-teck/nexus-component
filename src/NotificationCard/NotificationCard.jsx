import { Bell } from "lucide-react"
import "./NotificationCard.css"

export function NotificationCard({ notification }) {
  return (
    <div className="notification-card">
      <div className="notification-icon">
        <Bell className="icon" />
      </div>
      <div className="notification-content">
        <h4 className="notification-title">{notification.title}</h4>
        <p className="notification-message">{notification.message}</p>
        <span className="notification-time">{notification.time}</span>
      </div>
    </div>
  )
}