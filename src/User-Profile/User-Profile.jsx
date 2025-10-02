import "./User-Profile.css"

export function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="profile-avatar" />
        <div className="profile-info">
          <h3 className="profile-name">{user.name}</h3>
          <p className="profile-role">{user.role}</p>
        </div>
      </div>
      <p className="profile-email">{user.email}</p>
    </div>
  )
}