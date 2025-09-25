"use client"

import { useState, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
})

// Inline Button Component
function Button({ children, variant = "default", className = "", onClick, ...props }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const baseStyles = "px-3 py-1.5 rounded-md font-medium transition-colors focus:outline-none text-sm"
  const variants = {
    default: isDarkMode
      ? "bg-purple-600 hover:bg-purple-700 text-white"
      : "bg-purple-600 hover:bg-purple-700 text-white",
    outline: isDarkMode
      ? "border border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300"
      : "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
    ghost: isDarkMode
      ? "bg-transparent hover:bg-gray-800 text-gray-300"
      : "bg-transparent hover:bg-gray-100 text-gray-600",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

// Inline Input Component
function Input({ className = "", type = "text", defaultValue, ...props }) {
  const { isDarkMode } = useContext(DarkModeContext)
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      className={`w-full px-2.5 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
        isDarkMode
          ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
          : "border-gray-300 bg-gray-100 text-gray-900"
      } ${className}`}
      {...props}
    />
  )
}

// Inline Avatar Component
function Avatar({ children, className = "" }) {
  return <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>
}

function AvatarFallback({ children, className = "" }) {
  return <div className={`w-full h-full flex items-center justify-center ${className}`}>{children}</div>
}

// Inline Checkbox Component
function Checkbox({ id, defaultChecked = false, className = "" }) {
  const { isDarkMode } = useContext(DarkModeContext)
  return (
    <input
      type="checkbox"
      id={id}
      defaultChecked={defaultChecked}
      className={`w-4 h-4 text-purple-600 rounded focus:ring-purple-500 focus:ring-2 ${
        isDarkMode ? "bg-gray-800 border-gray-600" : "bg-gray-100 border-gray-300"
      } ${className}`}
    />
  )
}

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-md transition-colors ${
        isDarkMode ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" : "bg-gray-100 hover:bg-gray-200 text-gray-600"
      }`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("Account")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const sidebarItems = ["Account", "Manage Plan", "Your Team", "Referral Program"]

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        {/* Header */}
        <header
          className={`flex items-center justify-between px-4 py-4 border-b ${
            isDarkMode ? "border-gray-800 bg-gray-900" : "border-gray-100 bg-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-r from-[#9b2fff] to-[#3b82f6]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              VidBridge
            </span>
          </div>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <Button variant="ghost" className="cursor-pointer">
              Go to Dashboard
            </Button>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className={`w-52 lg:w-60 min-h-[calc(100vh-73px)] p-4 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors cursor-pointer ${
                    activeSection === item
                      ? isDarkMode
                        ? "bg-gray-700 text-white shadow-sm"
                        : "bg-white text-gray-900 shadow-sm"
                      : isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className={`flex-1 p-6 lg:p-8 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
            <div className="max-w-5xl mx-auto px-4 w-full">
              {activeSection === "Account" && <AccountSection />}
              {activeSection === "Manage Plan" && <ManagePlanSection />}
              {activeSection === "Your Team" && (
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Your Team content coming soon...
                </div>
              )}
              {activeSection === "Referral Program" && (
                <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Referral Program content coming soon...
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </DarkModeContext.Provider>
  )
}

function AccountSection() {
  const [image, setImage] = useState(null)
  const { isDarkMode } = useContext(DarkModeContext)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  return (
    <div className="max-w-3xl">
      <h1 className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Account</h1>

      {/* Profile Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Profile</h2>
          <Button className="cursor-pointer">Save</Button>
        </div>

        <div className="space-y-4">
          {/* Avatar Upload */}
          <div className="flex items-center gap-3">
            {/* Avatar circle */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9b2fff] to-[#3b82f6] flex items-center justify-center overflow-hidden text-white font-semibold text-base">
              {image ? (
                <img src={image || "/placeholder.svg"} alt="Uploaded Avatar" className="w-full h-full object-cover" />
              ) : (
                "AK"
              )}
            </div>

            <div>
              {/* Hidden file input */}
              <input type="file" accept="image/*" id="avatarUpload" className="hidden" onChange={handleImageUpload} />

              {/* Button to trigger input */}
              <Button
                variant="outline"
                className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent cursor-pointer"
                onClick={() => document.getElementById("avatarUpload").click()}
              >
                Upload image
              </Button>

              <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Recommended 160x160px in PNG or JPG format
              </p>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                First Name
              </label>
              <Input defaultValue="Aradhya" />
            </div>
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Last Name
              </label>
              <Input defaultValue="Kulkarni" />
            </div>
          </div>
        </div>
      </div>

      {/* Google Notice */}
      <div className={`flex items-center gap-2.5 p-3 rounded-md mb-6 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-500 font-bold text-xs">G</span>
        </div>
        <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          You signed up with Google. Email changes and password logins aren't supported yet.
        </span>
      </div>

      {/* Email Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Email</h2>
          <Button className="cursor-pointer">Save</Button>
        </div>

        <div>
          <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            Email
          </label>
          <Input defaultValue="aradhyakulkarni2005@gmail.com" />
        </div>
      </div>

      {/* Change Password Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Change Password</h2>
          <Button className="cursor-pointer">Update password</Button>
        </div>

        <div className="space-y-3 max-w-sm">
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Existing Password
            </label>
            <Input type="password" />
          </div>
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              New Password
            </label>
            <Input type="password" />
          </div>
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Confirm New Password
            </label>
            <Input type="password" />
          </div>
        </div>
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-2.5">
        <Checkbox id="privacy" defaultChecked className="mt-0.5" />
        <label
          htmlFor="privacy"
          className={`text-xs leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Let DesignAli use your content to train AI models. Steps are taken to protect your privacy and de-identify
          your data.
        </label>
      </div>
    </div>
  )
}

function ManagePlanSection() {
  const navigate = useNavigate()
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className="max-w-3xl">
      <h1 className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Manage Plan</h1>

      {/* Current Plan */}
      <div className="mb-8">
        <h2 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Current Plan</h2>

        <div className={`rounded-md p-4 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className={`text-base font-medium mb-1.5 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Free Plan
              </h3>
              <div className="flex items-baseline gap-1">
                <span className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>$0</span>
                <span className="text-purple-600 text-xs">per member-month</span>
              </div>
            </div>
            <div>
              <h4 className={`font-medium mb-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Included in plan
              </h4>
              <div className="space-y-1.5">
                {["1 project", "1 page", "Share - Read-only link", "Export - Figma only"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button onClick={() => navigate("/profile-pricing")} className="cursor-pointer">
            Upgrade
          </Button>
        </div>
      </div>

      {/* Billing Section */}
      <div>
        <h2 className={`text-lg font-medium mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Billing</h2>
        <p className={`mb-4 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Manage your billing email address, payment method and view invoices with your account email.
        </p>
        <Button variant="outline" className="cursor-pointer bg-transparent">
          Manage Billing
        </Button>
      </div>
    </div>
  )
}
