"use client"

import { Bell, Search, Upload, Youtube, Moon, Sun } from "lucide-react"

export function EditorHeader({ isDarkMode, toggleDarkMode }) {
  return (
    <header
      className={`h-16 border-b sticky top-0 z-50 backdrop-blur-sm ${
        isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white/50 border-gray-200"
      }`}
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              placeholder="Search tasks, projects..."
              className={`pl-10 pr-3 py-1 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className={`flex items-center gap-2 text-sm px-3 py-1 border rounded-md ${
              isDarkMode
                ? "border-gray-700 text-gray-200 hover:bg-gray-800"
                : "border-gray-300 text-gray-900 hover:bg-gray-100"
            }`}
          >
            <Youtube className="w-4 h-4" />
            Connect with YouTube
          </button>

          <button
            className={`flex items-center gap-2 text-sm px-3 py-1 rounded-md ${
              isDarkMode ? "bg-blue-700 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Upload className="w-4 h-4" />
            Upload Work
          </button>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md hover:bg-gray-100 ${
              isDarkMode ? "hover:bg-gray-800 text-gray-200" : "text-gray-600"
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            className={`p-2 rounded-md ${
              isDarkMode ? "hover:bg-gray-800 text-gray-200" : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
