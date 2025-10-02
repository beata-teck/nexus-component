import "./StatsCard.css"

export function StatsCard({ title, value, color, description }) { 
  return (
    <div className={`stats-card ${color}`}>
      <div className="stats-header">
        <h3 className="stats-title">{title}</h3>
      </div>

      <div className="stats-content">
        <div className="stats-value">{value}</div>
        <p className="stats-description">{description}</p>
      </div>
    </div>
  )
}