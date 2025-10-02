import { Header } from "../../components/header/header"
import { TaskCard } from "../../components/TaskCard/TaskCard"
import { UserProfile } from "../../components/UserProfile/User-Profile"
import { StatsCard } from "../../components/StateCard/StateCard"
import { ProjectCard } from "../../components/ProjectCard/ProjectCard"
import { TeamMember } from "../../components/TeamCard/TeamCard"
import { NotificationCard } from "../../components/NotificationCard/NotificationCard"
import { ActivityFeed } from "../../components/Activity-Feed/Activity-Feed"
import { Footer } from "../../components/Footer/footer"
import "./App.css"

export default function App() {
  const tasks = [
    {
      id: 1,
      title: "Design Homepage",
      description: "Create wireframes and mockups for the new homepage layout",
      assignee: "Sarah Chen",
      dueDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Setup Database",
      description: "Configure PostgreSQL database and create initial schemas",
      assignee: "Mike Johnson",
      dueDate: "2024-01-20",
    },
    {
      id: 3,
      title: "Write Documentation",
      description: "Document API endpoints and component usage",
      assignee: "Alex Rivera",
      dueDate: "2024-01-10",
    },
    {
      id: 4,
      title: "Implement Authentication",
      description: "Add user login and registration functionality",
      assignee: "Emma Davis",
      dueDate: "2024-01-25",
    },
  ]

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/professional-headshot.png",
    role: "Project Manager",
  }

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Building a modern online shopping experience",
      teamSize: 8,
      dueDate: "2024-02-15",
    },
    {
      id: 2,
      name: "Mobile App",
      description: "Cross-platform mobile application development",
      teamSize: 5,
      dueDate: "2024-03-01",
    },
    {
      id: 3,
      name: "Analytics Dashboard",
      description: "Real-time data visualization and reporting",
      teamSize: 3,
      dueDate: "2024-01-30",
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "UI/UX Designer",
      avatar: "/professional-woman-designer.png",
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "Backend Developer",
      avatar: "/professional-man-developer.png",
    },
    {
      id: 3,
      name: "Alex Rivera",
      role: "Technical Writer",
      avatar: "/professional-person-writer.jpg",
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Frontend Developer",
      avatar: "/professional-woman-developer.png",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Task Completed",
      message: "Documentation has been finished by Alex Rivera",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Deadline Approaching",
      message: "Homepage design is due in 3 days",
      time: "4 hours ago",
    },
    {
      id: 3,
      title: "New Team Member",
      message: "Emma Davis joined the project",
      time: "1 day ago",
    },
  ]

  const activities = [
    {
      id: 1,
      user: "Sarah Chen",
      action: "updated",
      target: "Homepage Design",
      time: "30 minutes ago",
    },
    {
      id: 2,
      user: "Mike Johnson",
      action: "commented on",
      target: "Database Setup",
      time: "1 hour ago",
    },
    {
      id: 3,
      user: "Alex Rivera",
      action: "completed",
      target: "API Documentation",
      time: "2 hours ago",
    },
  ]

  const stats = {
    total: tasks.length,
    projects: projects.length,
    teamMembers: teamMembers.length,
    notifications: notifications.length,
  }

  return (
    <div className="app">
    <div className="dashboard">
      <Header title="Task Management Dashboard" />

      <main className="main-content">
        <div className="grid-container">
          {/* Main Content */}
          <div className="main-section">
            {/* Stats Cards */}
            <div className="stats-grid">
              <StatsCard
                title="Total Tasks"
                value={stats.total}
                color="primary"
                description="All tasks in the system"
              />
              <StatsCard
                title="Active Projects"
                value={stats.projects}
                color="secondary"
                description="Currently running projects"
              />
              <StatsCard
                title="Team Members"
                value={stats.teamMembers}
                color="accent"
                description="People in your team"
              />
              <StatsCard
                title="Notifications"
                value={stats.notifications}
                color="outline"
                description="Recent updates"
              />
            </div>

            {/* Progress Overview */}
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Tasks */}
            <div className="tasks-section">
              <h2 className="section-title">Recent Tasks</h2>
              <div className="tasks-list">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <UserProfile user={user} />

            <div className="sidebar-section">
              <h3 className="sidebar-title">Team Members</h3>
              <div className="team-list">
                {teamMembers.map((member) => (
                  <TeamMember key={member.id} member={member} />
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Notifications</h3>
              <div className="notifications-list">
                {notifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            </div>

            <ActivityFeed activities={activities} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </div>
  )
}
