"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "creator",
    avatar: "",
    isActive: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
  };
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Form */}
        <section
          aria-labelledby="signup-title"
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 max-w-md mx-auto w-full"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600">
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
            <h1
              id="signup-title"
              className="text-lg font-semibold text-gray-900 select-none"
            >
              VidBridge
            </h1>
          </div>

          <h2
            className="text-2xl font-semibold text-gray-900 mb-5"
            tabIndex={-1}
          >
            Sign up
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-describedby="signup-desc"
          >
            <p id="signup-desc" className="sr-only">
              Please fill in the form below to create an account.
            </p>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
                autoComplete="name"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="user@company.com"
                autoComplete="email"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength={6}
                placeholder="Create a strong password"
                autoComplete="new-password"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                aria-describedby="password-help"
              />
              <p id="password-help" className="mt-1 text-xs text-gray-500">
                Minimum 6 characters.
              </p>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role
              </label>
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full appearance-none px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-500 transition duration-200 hover:border-gray-400"
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="creator">Creator</option>
                  <option value="editor">Editor</option>
                </select>

                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              aria-label="Continue with email"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-2" aria-hidden="true">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-xs text-gray-500 select-none  ">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            aria-label="Continue with Google"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          <p className="text-xs text-gray-500 mt-4 leading-relaxed select-text">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Licensing
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <div className="flex items-center justify-center gap-1">
            <span className="text-sm text-gray-600 select-none">
              Already have an account?
            </span>
            <button
              onClick={() => navigate("/signin")}
              className="text-sm text-blue-600 hover:underline font-medium focus:outline-none cursor-pointer "
            >
              Log in
            </button>
          </div>
        </section>

        {/* Right side */}
        <aside
          aria-label="Testimonial and trust section"
          className="flex flex-col justify-start lg:items-start text-center lg:text-left space-y-8 px-4 mb-18"
        >
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <img
              src="/images/Signup/professional-video-creator-headshot.png"
              alt="Video creator headshot"
              className="w-17 h-17 rounded-full object-cover shadow-md sm:ml-44"
              loading="lazy"
              decoding="async"
            />

            <blockquote
              className="text-lg text-gray-600 leading-relaxed italic max-w-md"
              aria-label="User testimonial"
            >
              “The scale, quality, and organisation of this platform is insane!
              Everything you need to spin up seamless collaboration between
              YouTube creators and video editors in no time.”
            </blockquote>

            <div className="space-y-1">
              <p className="text-blue-600 font-semibold text-sm">
                @jordanhughes
              </p>
              <p className="text-gray-500 text-xs">Co-founder, VidBridge</p>
            </div>
          </div>

          <div className="space-y-6 max-w-lg mx-auto text-center">
            {/* Top text */}
            <p className="text-gray-900 text-base">
              <span className="text-blue-600 font-bold">700,000+</span> creators
              & editors use VidBridge to collaborate faster.
            </p>

            {/* Logos grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center text-gray-400 ml-7">
              {/* YouTube */}
              <div className="flex justify-center w-11 h-11">
                <svg
                  viewBox="0 -3 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>youtube [#168]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-300.000000, -7442.000000)"
                        fill="#000000"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                            id="youtube-[#168]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>

              {/* canva */}
              <div className="flex justify-center w-11 h-11 ">
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.281 10.24c1.005 0 1.787 0.733 1.875 1.599 0.095 0.781-0.229 1.464-1.093 1.875-0.459 0.229-0.641 0.229-0.735 0.093-0.047-0.093 0-0.181 0.093-0.276 0.824-0.681 0.824-1.233 0.729-2.009-0.047-0.505-0.411-0.824-0.776-0.824-1.604 0-3.885 3.563-3.568 6.172 0.141 1.005 0.735 2.193 2.011 2.193 0.412 0 0.871-0.136 1.281-0.317 0.667-0.355 1.068-0.625 1.464-1.068-0.099-1.183 0.937-2.729 2.468-2.729 0.688 0 1.235 0.276 1.281 0.781 0.089 0.683-0.505 0.776-0.687 0.776-0.183 0-0.505-0.047-0.505-0.229-0.041-0.183 0.411-0.093 0.369-0.505-0.047-0.276-0.323-0.364-0.593-0.364-0.964 0-1.511 1.328-1.375 2.145 0.047 0.369 0.228 0.735 0.599 0.735 0.271 0 0.683-0.412 0.817-1.005 0.093-0.412 0.459-0.688 0.781-0.688 0.136 0 0.224 0.047 0.271 0.229v0.183c-0.041 0.183-0.183 0.735-0.135 0.869 0 0.095 0.047 0.229 0.228 0.229 0.12 0 0.579-0.24 1.037-0.615 0.151-0.787 0.333-1.729 0.333-1.807 0.047-0.323 0.183-0.641 0.823-0.641 0.14 0 0.229 0.047 0.276 0.229v0.183l-0.183 0.823c0.595-0.776 1.464-1.323 2.011-1.323 0.229 0 0.412 0.135 0.412 0.364 0 0.136 0 0.365-0.095 0.595-0.181 0.5-0.411 1.281-0.547 1.963 0 0.183 0.047 0.365 0.276 0.365s0.912-0.271 1.459-1.005l0.011-0.005c0-0.089-0.011-0.177-0.011-0.265 0-0.552 0.047-1.005 0.141-1.328 0.093-0.365 0.547-0.683 0.823-0.683 0.135 0 0.276 0.088 0.276 0.224 0 0.047 0 0.14-0.047 0.183-0.183 0.599-0.324 1.145-0.324 1.692 0 0.323 0.048 0.776 0.141 1.052 0 0.047 0.041 0.093 0.088 0.093 0.095 0 0.735-0.593 1.188-1.375-0.412-0.271-0.641-0.729-0.641-1.276 0-0.963 0.6-1.464 1.147-1.464 0.459 0 0.823 0.319 0.823 0.959 0 0.412-0.136 0.871-0.364 1.281h0.135c0.292 0.011 0.579-0.109 0.776-0.317 0.047-0.073 0.109-0.125 0.183-0.156 0.448-0.568 1.104-0.989 1.88-0.989 0.64 0 1.229 0.276 1.276 0.776 0.093 0.687-0.505 0.823-0.688 0.823-0.181 0-0.504-0.047-0.504-0.229s0.411-0.093 0.369-0.5c-0.047-0.276-0.323-0.369-0.599-0.369-0.912 0-1.505 1.187-1.371 2.151 0.047 0.364 0.229 0.776 0.595 0.776 0.276 0 0.687-0.412 0.869-1.005 0.088-0.364 0.459-0.688 0.776-0.688 0.14 0 0.229 0.047 0.276 0.229 0 0.095 0 0.276-0.183 0.871-0.229 0.411-0.229 0.64-0.181 0.823 0.041 0.364 0.224 0.64 0.411 0.776 0.041 0.047 0.089 0.135 0.089 0.135 0 0.095-0.048 0.188-0.183 0.188-0.047 0-0.089 0-0.136-0.047-0.687-0.276-0.963-0.735-1.052-1.193-0.276 0.323-0.593 0.505-0.963 0.505-0.595 0-1.183-0.547-1.276-1.235-0.027-0.291 0.004-0.588 0.099-0.864-0.271 0.172-0.563 0.271-0.833 0.271h-0.224c-0.599 0.869-1.24 1.464-1.693 1.735-0.156 0.083-0.328 0.131-0.505 0.14-0.088 0-0.228-0.047-0.271-0.14-0.129-0.203-0.208-0.521-0.26-0.885-0.641 0.697-1.527 1.072-1.937 1.072-0.459 0-0.729-0.276-0.776-0.733v-0.5c0.135-1.005 0.505-1.604 0.505-1.787-0.005-0.047-0.043-0.089-0.095-0.093-0.317 0-1.369 1.099-1.552 1.833l-0.14 0.593c-0.089 0.411-0.5 0.687-0.776 0.687-0.136 0-0.229-0.047-0.271-0.228v-0.183l0.057-0.312c-0.579 0.411-1.157 0.676-1.433 0.676-0.411 0-0.64-0.229-0.681-0.552-0.276 0.371-0.595 0.552-1.005 0.552-0.475 0-0.932-0.323-1.151-0.791-0.329 0.369-0.699 0.739-1.136 1.020-0.64 0.412-1.369 0.729-2.24 0.729-0.776 0-1.463-0.412-1.828-0.776-0.552-0.505-0.869-1.281-0.916-2.011-0.271-2.239 1.099-5.12 3.197-6.401 0.505-0.276 1.011-0.457 1.511-0.457zM22.307 14.631c-0.135 0-0.228 0.229-0.228 0.452 0 0.371 0.181 0.781 0.411 1.011 0.095-0.249 0.136-0.515 0.141-0.781 0-0.452-0.183-0.681-0.324-0.681z"></path>{" "}
                  </g>
                </svg>
              </div>

              {/* adobe */}
              <div className="flex justify-center w-11 h-11 ">
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>adobe</title>{" "}
                    <path d="M30.996 2.724h-11.102l11.102 26.552zM12.106 2.724h-11.102v26.552zM18.457 29.276l-2.112-5.35h-5.191l4.864-11.427 7.075 16.776z"></path>{" "}
                  </g>
                </svg>
              </div>
              {/* notion */}
              <div className="flex justify-center w-11 h-11">
                <svg
                  fill="#000000"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>Notion icon</title>
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
