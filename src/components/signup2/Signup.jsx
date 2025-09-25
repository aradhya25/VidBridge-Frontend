"use client";

import { useState } from "react";
import { Eye, EyeOff, Upload } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    avatar: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, avatar: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Signup data:", formData);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">VidBridge</h1>
          <p className="text-gray-400">Create your account to get started</p>
        </div>

        {/* Card */}
        <div className="bg-black  rounded-lg shadow p-6">
          <div className="space-y-1 text-center mb-6">
            <h2 className="text-2xl text-white font-bold">Sign Up</h2>
            <p className="text-gray-400">
              Fill in the details below and get started quickly!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-white block">
                Full Name <span className="text-orange-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g., John Doe"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full rounded-md border border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-orange-500 p-2"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-white block">
                Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g., john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full rounded-md border border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-orange-500 p-2"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-white block">
                Password <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full rounded-md border border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-orange-500 p-2 pr-10"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Role Field */}
            <div className="space-y-2">
              <label htmlFor="role" className="text-white block">
                Role <span className="text-orange-500">*</span>
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                className="w-full rounded-md border border-gray-700 bg-black text-white focus:border-orange-500 p-2"
                required
              >
                <option value="">Select your role</option>
                <option value="creator">🎬 Creator</option>
                <option value="editor">✂️ Editor</option>
              </select>
            </div>

            {/* Avatar Upload */}
            {/* <div className="space-y-2">
              <label className="text-white block">Profile Picture</label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="avatar-upload"
                />
                <label htmlFor="avatar-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-gray-400 text-sm">
                    {formData.avatar
                      ? formData.avatar.name
                      : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    PNG, JPG (MAX. 2MB)
                  </p>
                </label>
              </div>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-medium py-2.5 rounded-md transition-colors cursor-pointer"
            >
              {isLoading ? "Creating Account..." : "Create Account →"}
            </button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
