"use client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "./Loader"
import {
  MdDashboard,
  MdApps,
  MdFolder,
  MdWork,
  MdSchool,
  MdPeople,
  MdSettings,
  MdSearch,
  MdNotifications,
  MdRefresh,
  MdDarkMode,
  MdLightMode,
  MdStar,
  MdEdit,
} from "react-icons/md"
import { Youtube } from "lucide-react"
import ProfileDropdown from "./ProfileDropdown"

const recentApps = [
  {
    icon: <MdEdit className="w-6 h-6" />,
    title: "PixelMaster",
    description: "Advanced image editing and composition",
    color: "bg-purple-500",
  },
  {
    icon: <MdEdit className="w-6 h-6" />,
    title: "VectorCraft",
    description: "Professional vector design tools",
    color: "bg-orange-500",
  },
]

const Sidebar = ({ isDarkMode }) => (
  <div
    className={`w-52 h-screen p-4 flex flex-col border-r ${
      isDarkMode ? "bg-slate-800 border-slate-700" : "bg-gray-50 border-gray-200"
    }`}
  >
    <div className="flex items-center mb-8">
      <div className="w-6 h-6 bg-gradient-to-r from-[#9b2fff] to-[#3b82f6] rounded mr-2 flex items-center justify-center">
        <span className="text-white text-xs font-bold">D</span>
      </div>
      <div>
        <h1 className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>VidBridge</h1>
        {/* <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Creative Suite</p> */}
      </div>
    </div>

    <div className="mb-6">
      <div className={`relative ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
        <input
          type="text"
          placeholder="Search..."
          className={`w-full pl-9 pr-3 py-2 text-sm rounded-md border ${
            isDarkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
      </div>
    </div>

    <nav className="flex-grow">
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className={`flex items-center p-2 rounded-md text-sm font-medium ${
              isDarkMode ? "bg-slate-700 text-white" : "bg-white text-gray-900 shadow-sm"
            }`}
          >
            <MdDashboard className="mr-3 w-4 h-4" /> My Tasks
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`flex items-center p-2 rounded-md text-sm ${
              isDarkMode
                ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <MdApps className="mr-3 w-4 h-4" /> Collaborations
            <span
              className={`ml-auto text-xs px-1.5 py-0.5 rounded ${
                isDarkMode ? "bg-slate-600 text-gray-300" : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`flex items-center p-2 rounded-md text-sm ${
              isDarkMode
                ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <MdFolder className="mr-3 w-4 h-4" /> Calendar
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`flex items-center p-2 rounded-md text-sm ${
              isDarkMode
                ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <MdWork className="mr-3 w-4 h-4" /> Projects
            <span
              className={`ml-auto text-xs px-1.5 py-0.5 rounded ${
                isDarkMode ? "bg-slate-600 text-gray-300" : "bg-gray-200 text-gray-600"
              }`}
            >
              4
            </span>
          </a>
        </li>
        
        <li>
          <a
            href="#"
            className={`flex items-center p-2 rounded-md text-sm ${
              isDarkMode
                ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <MdPeople className="mr-3 w-4 h-4" /> Community
          </a>
        </li>
        
      </ul>
    </nav>

    <div className="mt-auto">
      

      <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? "bg-slate-700" : "bg-white shadow-sm"}`}>
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              isDarkMode ? "bg-slate-600" : "bg-gray-200"
            }`}
          >
            <span className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-700"}`}>JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium truncate ${isDarkMode ? "text-white" : "text-gray-900"}`}>John Doe</p>
            <p className={`text-xs truncate ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Pro</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const AppCard = ({ app, isDarkMode }) => (
  <div
    className={`p-6 rounded-xl border ${
      isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
    } hover:shadow-lg transition-shadow`}
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-lg ${app.color}`}>
        <div className="text-white">{app.icon}</div>
      </div>
      <button
        className={`p-1 rounded ${
          isDarkMode
            ? "text-gray-400 hover:text-white hover:bg-slate-700"
            : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        }`}
      >
        <MdStar className="w-4 h-4" />
      </button>
    </div>

    <h3 className={`font-semibold text-lg mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{app.title}</h3>
    <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{app.description}</p>

    <button className="w-full bg-gradient-to-r from-[#9b2fff] to-[#3b82f6] hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
      Open
    </button>
  </div>
)

const Dashboard = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const navigate = useNavigate()

  const handleNewProjectClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate("/createProject")
    }, 2000)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`flex min-h-screen ${isDarkMode ? "bg-slate-900" : "bg-gray-50"}`}>
      {isLoading && <Loader />}
      <Sidebar isDarkMode={isDarkMode} />

      <main className="flex-1">
        <header
          className={`px-6 py-4 border-b ${isDarkMode ? "bg-slate-900 border-slate-700" : "bg-white border-gray-200"}`}
        >
          <div className="flex items-center justify-between">
            <h1 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
             VidBridge
            </h1>

            <div className="flex items-center gap-3">
              <button
                className={`px-3 py-1.5 text-sm rounded-md border ${
                  isDarkMode
                    ? "text-gray-300 border-slate-600 hover:bg-slate-800"
                    : "text-gray-600 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Home
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded-md ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-slate-800"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                Apps
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded-md ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-slate-800"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                Files
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded-md ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-slate-800"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                Projects
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded-md ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-slate-800"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                Learn
              </button>

              <div className="flex items-center gap-2 ml-4">
                <button
                  className={`px-3 py-1.5 text-sm rounded-md border ${
                    isDarkMode
                      ? "text-gray-300 border-slate-600 hover:bg-slate-800"
                      : "text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  
                  Connect with Youtube
                </button>
                <button
                  onClick={handleNewProjectClick}
                  className="px-3 py-1.5 text-sm bg-black text-white rounded-md hover:bg-gray-800"
                >
                  + New Project
                </button>

                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-md ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-slate-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {isDarkMode ? <MdLightMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
                </button>

                <button
                  className={`p-2 rounded-md ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-slate-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <MdRefresh className="w-5 h-5" />
                </button>
                <button
                  className={`p-2 rounded-md ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-slate-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <MdNotifications className="w-5 h-5" />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? "border-slate-600" : "border-gray-300"}`}
                  />
                  <ProfileDropdown
                    email="okaware7@gmail.com"
                    isOpen={isProfileOpen}
                    onClose={() => setIsProfileOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className={`bg-gradient-to-r from-[#9b2fff] to-[#3b82f6] rounded-2xl p-8 mb-8 text-white ${
            isDarkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-700 text-white"
                : "bg-gradient-to-r from-[#9b2fff] to-[#3b82f6] rounded-2xl p-8 mb-8 text-white"
          }`}>
            <div className="mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Premium</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome Back, [User]! Here’s your project overview.</h2>
            <p className="text-purple-100 mb-6 max-w-2xl">
              Empowering creators and editors with a seamless platform for collaboration, project management, and content publishing.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-purple-50 transition-colors cursor-pointer">
                Explore Plans
              </button>
              
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Recent Projects</h3>
            <button
              className={`text-sm ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentApps.map((app, index) => (
              <AppCard key={index} app={app} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard