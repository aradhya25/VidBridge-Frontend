import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdPersonOutline,
  MdSettings,
  MdAttachMoney,
  MdDescription,
  MdGroup,
  MdHelpOutline,
  MdExitToApp,
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdOutlineDesktopWindows
} from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';

const ProfileDropdown = ({ email, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('system');
  const [language, setLanguage] = useState('English');
  const [chatPosition, setChatPosition] = useState('Left');

  const handleSignOut = () => {
    // Remove user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    
    // Close the dropdown
    onClose();
    
    // Redirect to login page
    navigate('/login');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0" onClick={onClose} />
      <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-50 text-sm">
        <div className="px-4 py-2 border-b border-gray-200">
          <p className="text-gray-800">{email}</p>
        </div>

        <div className="py-1">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <MdPersonOutline className="mr-3 text-lg" />
            Profile
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <MdSettings className="mr-3 text-lg" />
            Settings
          </a>
          <a href="#" className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
            <div className="flex items-center">
              <MdAttachMoney className="mr-3 text-lg" />
              Pricing
            </div>
            <FiExternalLink className="text-gray-400" />
          </a>
          <a href="#" className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
            <div className="flex items-center">
              <MdDescription className="mr-3 text-lg" />
              Documentation
            </div>
            <FiExternalLink className="text-gray-400" />
          </a>
          <a href="#" className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
            <div className="flex items-center">
              <MdGroup className="mr-3 text-lg" />
              Community Forum
            </div>
            <FiExternalLink className="text-gray-400" />
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <MdHelpOutline className="mr-3 text-lg" />
            Feedback
          </a>
        </div>

        <div className="px-4 py-2 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-1">Credit Balance</p>
          <div className="flex justify-between text-gray-700 mb-1">
            <span>Gifted credits</span>
            <span>0.00</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Monthly credits</span>
            <span>4.59</span>
          </div>
          <div className="bg-blue-50 rounded-md p-2 text-sm">
            <p className="text-blue-700">Upgrade your plan to buy more credits.</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">Upgrade plan</a>
          </div>
        </div>

        <div className="px-4 py-2 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">Preferences</p>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Language</span>
            <select
              className="border border-gray-200 rounded px-2 py-1 text-sm bg-white"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Chat Position</span>
            <select
              className="border border-gray-200 rounded px-2 py-1 text-sm bg-white"
              value={chatPosition}
              onChange={(e) => setChatPosition(e.target.value)}
            >
              <option value="Left">Left</option>
              <option value="Right">Right</option>
            </select>
          </div>
        </div>

        <div className="py-1 border-t border-gray-200">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <MdExitToApp className="mr-3 text-lg" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;