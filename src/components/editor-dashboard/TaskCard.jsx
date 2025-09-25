"use client"

import { Calendar, Clock, Star } from "lucide-react"

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  "In Progress": "bg-blue-100 text-blue-800 border border-blue-300",
  Submitted: "bg-indigo-100 text-indigo-800 border border-indigo-300",
  Approved: "bg-green-100 text-green-800 border border-green-300",
}

const statusColorsDark = {
  Pending: "bg-yellow-800 text-yellow-100 border border-yellow-700",
  "In Progress": "bg-blue-800 text-blue-100 border border-blue-700",
  Submitted: "bg-indigo-800 text-indigo-100 border border-indigo-700",
  Approved: "bg-green-800 text-green-100 border border-green-700",
}

const priorityColors = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-green-600",
}

const priorityColorsDark = {
  High: "text-red-400",
  Medium: "text-yellow-400",
  Low: "text-green-400",
}

export function TaskCard({ title, description, deadline, status, priority, actionLabel, isDarkMode }) {
  return (
    <div
      className={`group border rounded-lg p-4 transition-all duration-200 ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 hover:shadow-lg"
          : "bg-white border-gray-300 hover:shadow-lg"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between pb-3">
        <div className="flex-1">
          <h3
            className={`font-semibold group-hover:text-blue-500 transition-colors ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {title}
          </h3>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm mt-1 line-clamp-2`}>
            {description}
          </p>
        </div>
        <Star
          className={`w-4 h-4 cursor-pointer ${
            isDarkMode ? "text-gray-400 hover:text-yellow-400" : "text-gray-400 hover:text-yellow-500"
          }`}
        />
      </div>

      {/* Content */}
      <div
        className={`flex items-center gap-4 text-sm pb-3 border-b ${
          isDarkMode ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-500"
        }`}
      >
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{deadline}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span className={isDarkMode ? priorityColorsDark[priority] : priorityColors[priority]}>
            {priority}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 flex items-center justify-between">
        <span className={`px-2 py-1 text-xs rounded-md ${isDarkMode ? statusColorsDark[status] : statusColors[status]}`}>
          {status}
        </span>
        <button
          className={`px-3 py-1 text-sm rounded-md ${
            isDarkMode
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  )
}
