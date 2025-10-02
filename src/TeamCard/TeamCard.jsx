import "./TeamCard.css"

export function TeamMember({ member }) {
  return (
    <div className="team-member">
      <img src={member.avatar || "/placeholder.svg"} alt={member.name} className="member-avatar" />
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-role">{member.role}</p>
      </div>
    </div>
  )
}