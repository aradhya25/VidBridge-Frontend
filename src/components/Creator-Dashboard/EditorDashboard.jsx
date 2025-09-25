import { Bell, Search, Upload, Calendar, Clock, AlertCircle, CheckCircle, FileText, MessageSquare } from "lucide-react"
import {
  MdDashboard,
  MdVideoLibrary,
  MdChecklist,
  MdPeople,
  MdCalendarToday,
  MdBarChart,
  MdInfo,
  MdReceipt,
  MdSettings,
  MdSearch,
  MdNotifications,
  MdFileUpload,
  MdAdd,
  MdVideocam,
  MdPodcasts,
  MdMoreHoriz,
  MdMovie
} from 'react-icons/md';

const tasks = [
  {
    id: 1,
    projectName: "Tech Review Series",
    taskDescription: "Edit episode 5 - iPhone 16 Pro review with color grading and motion graphics",
    deadline: "Jan 18, 2025",
    priority: "High",
    status: "In Progress",
    category: "Video Production",
    feedback: "Please add more dynamic transitions between product shots",
  },
  {
    id: 2,
    projectName: "Collaboration Hub",
    taskDescription: "Create highlight reel from 3-hour gaming stream with key moments",
    deadline: "Jan 22, 2025",
    priority: "High",
    status: "Pending",
    category: "Live Streaming",
    feedback: null,
  },
  {
    id: 3,
    projectName: "Tutorial Content",
    taskDescription: "Edit beginner Photoshop tutorial with screen recordings and voiceover sync",
    deadline: "Feb 3, 2025",
    priority: "Medium",
    status: "Submitted",
    category: "Educational",
    feedback: "Great work! Minor audio sync issue at 2:45 mark",
  },
  {
    id: 4,
    projectName: "Brand Partnership",
    taskDescription: "Create 30-second promotional video with brand guidelines compliance",
    deadline: "Jan 28, 2025",
    priority: "High",
    status: "Approved",
    category: "Sponsored",
    feedback: null,
  },
  {
    id: 5,
    projectName: "Podcast Series",
    taskDescription: "Audio editing and noise reduction for weekly industry expert interview",
    deadline: "Feb 12, 2025",
    priority: "Low",
    status: "Pending",
    category: "Audio Content",
    feedback: null,
  },
  {
    id: 6,
    projectName: "Short Form Content",
    taskDescription: "Create 5 TikTok-style videos from long-form content with trending effects",
    deadline: "Feb 1, 2025",
    priority: "Medium",
    status: "In Progress",
    category: "Short Form",
    feedback: "Love the pacing! Can you add more text overlays for accessibility?",
  },
]

const sidebarItems = [
  { name: "Dashboard", icon: <MdDashboard className="mr-3" />, active: true },
  { name: "My Projects", icon: <MdVideoLibrary className="mr-3" />, active: false },
  { name: "My Tasks", icon: <MdChecklist className="mr-3" />, active: false },,
  { name: "Calendar", icon: <MdCalendarToday className="mr-3" />, active: false },
  { name: "About Us", icon: <MdInfo className="mr-3" /> , active: false },
  { name: "Settings", icon: <MdSettings className="mr-3" />, active: false },
]

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-500 text-white"
    case "Medium":
      return "bg-slate-800 text-white"
    case "Low":
      return "bg-gray-500 text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

const getStatusIcon = (status) => {
  switch (status) {
    case "Pending":
      return <Clock className="w-4 h-4 text-gray-500" />
    case "In Progress":
      return <AlertCircle className="w-4 h-4 text-blue-500" />
    case "Submitted":
      return <FileText className="w-4 h-4 text-orange-500" />
    case "Approved":
      return <CheckCircle className="w-4 h-4 text-green-500" />
    default:
      return <Clock className="w-4 h-4 text-gray-500" />
  }
}

export default function EditorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Reduced width */}
      <div className="w-56 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">▶</span>
            </div>
            <span className="text-lg font-bold text-gray-900">VidBridge</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-red-50 text-red-600 border-l-4 border-red-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-full overflow-hidden">
        {/* Top Bar - Reduced padding */}
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative max-w-sm flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors text-sm">
                <Upload className="w-4 h-4" />
                <span>Upload Work</span>
              </button>

              <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">ED</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content - Optimized padding and spacing */}
        <main className="flex-1 p-4 overflow-auto">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Editor Dashboard</h1>
              <p className="text-gray-600 mt-1 text-sm">Manage your assigned tasks and deadlines</p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md flex items-center space-x-2 transition-colors text-sm">
              <Upload className="w-4 h-4" />
              <span>Quick Upload</span>
            </button>
          </div>

          {/* Task Cards Grid - Optimized for better fit */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow max-w-sm"
              >
                <div className="p-4 pb-2">
                  <div className="flex items-start justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mt-2 leading-tight">{task.projectName}</h3>
                </div>

                <div className="px-4 pb-4 space-y-3">
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{task.taskDescription}</p>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-medium">{task.category}</span>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span>Deadline: {task.deadline}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(task.status)}
                      <span className="text-xs font-medium text-gray-700">{task.status}</span>
                    </div>
                  </div>

                  {task.feedback && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
                      <div className="flex items-start space-x-2">
                        <MessageSquare className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-blue-700 mb-1">Creator Feedback</p>
                          <p className="text-xs text-blue-600 leading-relaxed">{task.feedback}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}