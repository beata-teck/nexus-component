import { Search, Bell, Settings, ArrowDown, Camera } from "lucide-react"
import "./header.css"

export function Header({ title }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-left">
            <h1 className="header-title">{title}</h1>
          </div>

          <div className="header-actions">
            <button className="icon-button">
              <Search className="icon border "/>
              <span className="sr-only">Search</span>
            </button>
            <button className="icon-button">
             <Camera className="icon" color="red" size={48} />
              <span className="sr-only">Notifications</span>
            </button>
            <button className="icon-button">
              <Settings className="icon" />
              <span className="sr-only">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
