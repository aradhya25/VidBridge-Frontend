"use client";

import React from "react";

export default function Otp() {
  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP verification submitted");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="white"
              >
                <rect x="3" y="7" width="11" height="10" rx="2" ry="2" />
                <polygon points="16 10 21 7 21 17 16 14 16 10" />
              </svg>
            </span>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">
              VidBridge
            </span>
          </div>
        </div>

        {/* OTP Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Enter verification code
            </h1>
            <p className="text-sm text-gray-600">
              We've sent a 6-digit code to your email
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* OTP Input Fields */}
            <div className="flex justify-center gap-2 sm:gap-3">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 sm:py-3 rounded-lg transition-colors cursor-pointer text-sm sm:text-base"
            >
              Verify Code
            </button>

            {/* Resend Code */}
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-700 underline cursor-pointer"
              >
                Didn't receive the code? Resend
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
