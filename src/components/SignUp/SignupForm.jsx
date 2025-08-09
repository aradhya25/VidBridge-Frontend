import { useState } from "react";
import { Link } from "react-router-dom";
import { CameraIcon, UserIcon, MailIcon, LockIcon } from "lucide-react";

export default function SignupForm() {
  const [role, setRole] = useState("creator");
  const [avatarFile, setAvatarFile] = useState(null);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    console.log({
      name,
      email,
      password,
      role,
      avatarFile: avatarFile ? avatarFile.name : "No file",
    });
    alert("Signup successful! (Check console for data)");
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Create your VidBridge Account</h2>
        <p className="text-gray-600">
          Join VidBridge to collaborate effortlessly on your video projects.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <UserIcon className="h-4 w-4 text-gray-500" /> Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <MailIcon className="h-4 w-4 text-gray-500" /> Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="password" className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <LockIcon className="h-4 w-4 text-gray-500" /> Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* Role Dropdown */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
          <div className="relative">
            <button
              type="button"
              className="w-full flex justify-between items-center border border-gray-300 rounded px-3 py-2 bg-white"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              {role === "creator" ? "Creator" : "Editor"}
              <span className="ml-2">&#9660;</span>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 w-full bg-white border border-gray-200 mt-1 rounded shadow z-10">
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => { setRole("creator"); setDropdownOpen(false); }}
                >
                  Creator
                </button>
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => { setRole("editor"); setDropdownOpen(false); }}
                >
                  Editor
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Avatar */}
        <div className="space-y-2">
          <label htmlFor="avatar" className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <CameraIcon className="h-4 w-4 text-gray-500" /> Avatar (Optional)
          </label>
          <input
            id="avatar"
            name="avatar"
            type="file"
            accept="image/*"
            className="w-full"
            onChange={(e) =>
              setAvatarFile(e.target.files ? e.target.files[0] : null)
            }
          />
          {avatarFile && (
            <p className="text-xs text-gray-500 mt-1">
              Selected: {avatarFile.name}
            </p>
          )}
        </div>

        {/* Error */}
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link to="/login" className="underline text-blue-600 hover:text-blue-700">
          Login
        </Link>
      </div>
    </div>
  );
}
