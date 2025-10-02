import "./Activity-feed.css"

export function ActivityFeed({ activities }) {
  return (
    <div className="activity-feed">
      <h3 className="feed-title">Recent Activity</h3>
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-content">
              <p className="activity-text">
                <span className="activity-user">{activity.user}</span> {activity.action}{" "}
                <span className="activity-target">{activity.target}</span>
              </p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="activity">
          <div className="feed">


          </div>
          <div className="content">

          </div>
      </div>
    </div>
  )
}