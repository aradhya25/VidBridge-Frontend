"use client"

import { useState } from "react"
import { EditorSidebar } from "./EditorSidebar"
import { EditorHeader } from "./EditorHeader"
import { TaskCard } from "./TaskCard"

const mockTasks = [
  {
    title: "Travel Vlog Edit",
    description: "Edit raw footage into 10 min video with music and transitions",
    deadline: "Dec 28, 2024",
    status: "In Progress",
    priority: "High",
    actionLabel: "Continue Editing",
  },
  {
    title: "Product Review",
    description: "Create engaging product review video with B-roll and graphics",
    deadline: "Dec 30, 2024",
    status: "Pending",
    priority: "Medium",
    actionLabel: "Start Task",
  },
  {
    title: "Tutorial Series",
    description: "Edit episode 3 of cooking tutorial series",
    deadline: "Jan 2, 2025",
    status: "Submitted",
    priority: "Low",
    actionLabel: "View Feedback",
  },
  {
    title: "Brand Commercial",
    description: "Create 30-second commercial with motion graphics",
    deadline: "Jan 5, 2025",
    status: "Approved",
    priority: "High",
    actionLabel: "Upload Final",
  },
]

export default function EditorDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`flex h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <EditorSidebar isDarkMode={isDarkMode} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <EditorHeader isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

        <main className="flex-1 overflow-auto">
          {/* Hero Section */}
          <section
            className={`p-8 m-6 rounded-xl ${
              isDarkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-700 text-white"
                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            }`}
          >
            <div className="max-w-4xl">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Premium
              </div>
              <h1 className="text-3xl font-bold mb-3">
                Welcome Back, Editor! Here's your task overview.
              </h1>
              <p className="text-lg text-white/90 mb-6 max-w-2xl">
                Manage your editing tasks, upload completed work, and collaborate seamlessly with creators.
              </p>
              <button
                className={`px-5 py-2 font-semibold rounded-md ${
                  isDarkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-white text-blue-600 hover:bg-white/90"
                }`}
              >
                View Tasks
              </button>
            </div>
          </section>

          {/* Recent Tasks */}
          <section className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Recent Tasks
              </h2>
              <button
                className={`px-3 py-1 text-sm border rounded-md ${
                  isDarkMode
                    ? "border-gray-600 text-gray-200 hover:bg-gray-700"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockTasks.map((task, index) => (
                <TaskCard key={index} {...task} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
