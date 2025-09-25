"use client"

import { useState } from "react"
import {
  CheckSquare,
  MessageSquare,
  Calendar,
  FolderOpen,
  MessageCircle,
  DollarSign,
  Users,
  Settings,
  Search,
} from "lucide-react"

const sidebarItems = [
  { icon: CheckSquare, label: "My Tasks", active: true },
  { icon: MessageSquare, label: "Collaborations" },
  { icon: Calendar, label: "Calendar" },
  { icon: FolderOpen, label: "Projects" },
  { icon: MessageCircle, label: "Feedback" },
  { icon: DollarSign, label: "Payments" },
  { icon: Users, label: "Community" },
]

export function EditorSidebar({ isDarkMode }) {
  const [activeItem, setActiveItem] = useState("My Tasks")

  const bgColor = isDarkMode ? "bg-gray-900 border-gray-700" : "bg-gray-100 border-gray-300"
  const textColor = isDarkMode ? "text-gray-200" : "text-gray-800"
  const hoverBg = isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
  const inputBg = isDarkMode ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"

  return (
    <div className={`w-64 h-screen flex flex-col border-r ${bgColor}`}>
      {/* Logo */}
      <div className={`p-6 border-b ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">VB</span>
          </div>
          <span className={`font-semibold text-lg ${textColor}`}>VidBridge</span>
        </div>
      </div>

      {/* Search */}
      <div className={`p-4 border-b ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${textColor}`} />
          <input
            type="text"
            placeholder="Search..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = activeItem === item.label
            return (
              <li key={item.label}>
                <button
                  className={`w-full flex items-center gap-3 h-10 text-sm rounded-md px-3 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : `${textColor} ${hoverBg}`
                  }`}
                  onClick={() => setActiveItem(item.label)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Settings */}
      <div className={`p-4 border-t ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
        <button className={`w-full flex items-center gap-3 h-10 text-sm rounded-md px-3 ${textColor} ${hoverBg}`}>
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>

      {/* Profile */}
      <div className={`p-4 border-t flex items-center gap-3 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-400 text-white"}`}>
          ED
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium truncate ${textColor}`}>Editor</p>
          <p className={`text-xs truncate ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Pro</p>
        </div>
      </div>
    </div>
  )
}
