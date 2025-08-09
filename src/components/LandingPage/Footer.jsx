import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    

   
    <footer className="w-full bg-[#1A1A2E] text-gray-300 py-20 px-10 sm:px-12 lg:px-20 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">

        {/* Left Section - Company Info & Socials */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="text-lg leading-relaxed mb-6 max-w-md">
            Streamline video collaboration with secure uploads, direct editor connections, instant feedback, and automated YouTube publishing.
          </p>
          <h4 className="text-white font-semibold text-base mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div>
          <h4 className="text-white font-semibold text-base mb-3">Company</h4>
          <ul className="space-y-2">
           
            <li>
              <a href="/about-us" className="hover:text-blue-400 transition-colors duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Features
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-blue-400 transition-colors duration-200">
                Pricing
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Newsletter Subscribe */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-white font-semibold text-base mb-3">Subscribe </h4>
          <p className="text-sm mb-3">Get workflow advice, new feature announcements, and exclusive demo invites.</p>
          <form className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500">
            By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
          </p>
        </div>
      </div>

      {/* Large Faded Logo */}
      {/* <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none"> */}
        {/* Placeholder for the TrendTide logo icon */}
        {/* <svg
          className="w-64 h-64 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 100 8 4 4 0 000-8z" />
        </svg>
        <span className="text-7xl font-bold text-white ml-4">TrendTide</span>
      </div> */}

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 relative z-10">
        <p className="mb-4 sm:mb-0">© 2025 VidBridge. All rights reserved</p>
        <div className="flex space-x-3">
          <a href="#" className="hover:text-blue-400 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200">
            Terms of use
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200">
            Cookies
          </a>
        </div>
      </div>
    </footer>
     
  )
}
