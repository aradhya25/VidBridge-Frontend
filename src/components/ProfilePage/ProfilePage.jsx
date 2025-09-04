"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Inline Button Component
function Button({
  children,
  variant = "default",
  className = "",
  onClick,
  ...props
}) {
  const baseStyles =
    "px-3 py-1.5 rounded-md font-medium transition-colors focus:outline-none  text-sm";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-600",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

// Inline Input Component
function Input({ className = "", type = "text", defaultValue, ...props }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      className={`w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  );
}

// Inline Avatar Component
function Avatar({ children, className = "" }) {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function AvatarFallback({ children, className = "" }) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

// Inline Checkbox Component
function Checkbox({ id, defaultChecked = false, className = "" }) {
  return (
    <input
      type="checkbox"
      id={id}
      defaultChecked={defaultChecked}
      className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ${className}`}
    />
  );
}

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("Account");

  const sidebarItems = [
    "Account",
    "Manage Plan",
    "Your Team",
    "Referral Program",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-6.5 h-6.5 rounded-full flex items-center justify-center bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="white"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="7" width="11" height="10" rx="2" ry="2" />
              <polygon points="16 10 21 7 21 17 16 14 16 10" />
            </svg>
          </span>
          <span className="text-md font-semibold text-gray-900">VidBridge</span>
        </div>
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900 cursor-pointer">
          Go to Dashboard
        </Button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-52 lg:w-60 bg-gray-50 min-h-[calc(100vh-73px)] p-4">
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors cursor-pointer ${
                  activeSection === item
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-5xl mx-auto px-4 w-full">
            {activeSection === "Account" && <AccountSection />}
            {activeSection === "Manage Plan" && <ManagePlanSection />}
            {activeSection === "Your Team" && (
              <div className="text-gray-600">
                Your Team content coming soon...
              </div>
            )}
            {activeSection === "Referral Program" && (
              <div className="text-gray-600">
                Referral Program content coming soon...
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function AccountSection() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">Account</h1>

      {/* Profile Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Profile</h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
            Save
          </Button>
        </div>

        <div className="space-y-4">
          {/* Avatar Upload */}
          <div className="flex items-center gap-3">
            {/* Avatar circle */}
            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center overflow-hidden text-white font-semibold text-base">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                "AK"
              )}
            </div>

            <div>
              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                id="avatarUpload"
                className="hidden"
                onChange={handleImageUpload}
              />

              {/* Button to trigger input */}
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent cursor-pointer"
                onClick={() => document.getElementById("avatarUpload").click()}
              >
                Upload image
              </Button>

              <p className="text-xs text-gray-500 mt-1">
                Recommended 160x160px in PNG or JPG format
              </p>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                First Name
              </label>
              <Input defaultValue="Aradhya" className="bg-gray-100" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Last Name
              </label>
              <Input defaultValue="Kulkarni" className="bg-gray-100" />
            </div>
          </div>
        </div>
      </div>

      {/* Google Notice */}
      <div className="flex items-center gap-2.5 bg-gray-100 p-3 rounded-md mb-6">
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-500 font-bold text-xs">G</span>
        </div>
        <span className="text-gray-700 text-sm">
          You signed up with Google. Email changes and password logins aren't
          supported yet.
        </span>
      </div>

      {/* Email Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Email</h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
            Save
          </Button>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <Input
            defaultValue="aradhyakulkarni2005@gmail.com"
            className="bg-gray-100"
          />
        </div>
      </div>

      {/* Change Password Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Change Password</h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
            Update password
          </Button>
        </div>

        <div className="space-y-3 max-w-sm">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Existing Password
            </label>
            <Input type="password" className="bg-gray-100" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              New Password
            </label>
            <Input type="password" className="bg-gray-100" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Confirm New Password
            </label>
            <Input type="password" className="bg-gray-100" />
          </div>
        </div>
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-2.5">
        <Checkbox id="privacy" defaultChecked className="mt-0.5 " />
        <label
          htmlFor="privacy"
          className="text-xs text-gray-600 leading-relaxed"
        >
          Let Relume use your content to train AI models. Steps are taken to
          protect your privacy and de-identify your data.
        </label>
      </div>
    </div>
  );
}

function ManagePlanSection() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">Manage Plan</h1>

      {/* Current Plan */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Current Plan</h2>

        <div className="bg-gray-50 rounded-md p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-base font-medium mb-1.5">Free Plan</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-semibold">$0</span>
                <span className="text-blue-600 text-xs">per member-month</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2 text-sm">
                Included in plan
              </h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-700">1 project</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-700">1 page</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-700">
                    Share - Read-only link
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-700">
                    Export - Figma only
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => navigate("/profile-pricing")}
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
          >
            Upgrade
          </Button>
        </div>
      </div>

      {/* Billing Section */}
      <div>
        <h2 className="text-lg font-medium mb-3">Billing</h2>
        <p className="text-gray-600 mb-4 text-sm">
          Manage your billing email address, payment method and view invoices
          with your account email.
        </p>
        <Button
          variant="outline"
          className="border-gray-300 bg-transparent cursor-pointer"
        >
          Manage Billing
        </Button>
      </div>
    </div>
  );
}
