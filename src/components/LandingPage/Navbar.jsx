import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white/90 backdrop-blur-md shadow-md border-b border-blue-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-9 h-9 bg-blue-700 hover:bg-blue-800 transition-colors rounded-lg flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </motion.div>
            <motion.span
              whileHover={{ scale: 1.05, color: "#2563eb" }}
              className="text-xl font-bold text-gray-600 transition-transform duration-300"
            >
              VidBridge
            </motion.span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">


            {["Home", "Pricing", "Our Work", "About Us", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-all duration-200"
                >
                  {label}
                </a>
              )
            )}
          </div>

          {/* Book Demo Button - Desktop */}
          <div className="hidden md:flex">
            <button  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer">
              Sign in
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {[
                "Home",
                "Pricing",
                "Our Work",
                "About Us",
                "Contact Us",
              ].map((label) => (
                <a
                  key={label}
                  href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-2"
                >
                  {label}
                </a>
              ))}
              <div className="pt-3">
                <button className="w-full py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
                  Sign in
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
