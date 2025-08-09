import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { CardCarousel } from "./CardCarousel";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Hero() {
  const [typedDone, setTypedDone] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("heroTypingDone") === "true") {
      setTypedDone(true);
    }
  }, []);

  const handleTypingDone = () => {
    setTypedDone(true);
    localStorage.setItem("heroTypingDone", "true");
  };

  // const fullText = (
  //   <>
  //     Drive productivity and creativity with real-time collaboration tools,
  //     intuitive task management, and streamlined video review—
  //     <span className="text-blue-700 font-semibold">
  //       {" "}
  //       all in a secure workspace you control.
  //     </span>
  //   </>
  // );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden px-4 sm:px-6 lg:px-12 pb-20">
      {/* Background decorative circles */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-20"
          animate={{ scale: [1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center mt-15"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h1
          className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight sm:leading-[1.2] md:leading-[1.15] tracking-tight text-center px-4 sm:px-0"
          variants={fadeInUp}
        >
          <span className="block mb-2">Seamless Collaboration</span>

          <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-semibold">
            YouTube Creators
          </span>

          <span className="block text-gray-500 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-1">
            &amp;
          </span>

          <span className="block text-gray-900 text-3xl sm:text-4xl md:text-5xl font-semibold">
            Freelance Video Editors
          </span>

          <span className="block mt-4 text-blue-700 font-normal text-base sm:text-lg md:text-xl lg:text-2xl tracking-normal">
            All-in-One Workflow. Zero Hassle.
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 sm:mt-5 text-base sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-[90vw] sm:max-w-xl md:max-w-2xl mx-auto px-3 sm:px-0 leading-relaxed font-normal text-center break-words"
          variants={fadeInUp}
          custom={2}
        >
          Upload raw files, review edits, get approvals, and publish to YouTube
          — all in one secure, unified dashboard.
        </motion.p>

        <motion.div className="mt-10" variants={fadeInUp} custom={3}>
          <motion.button
            onClick={() => navigate("/signup")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>

        <motion.div
          className="relative w-full flex justify-center mt-6 z-10"
          variants={fadeInUp}
          custom={4}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 via-white to-transparent rounded-3xl blur-3xl opacity-50"></div>
          {/* subtle background gradient behind */}
          <img
            src="/images/dashboard-reference.png"
            alt="Project dashboard preview"
            className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl w-full rounded-3xl border border-blue-100 shadow-lg bg-white object-contain transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
            style={{ boxShadow: "0 6px 32px 0 #438aff40" }}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="mt-10 text-gray-500 text-center px-4 sm:px-0"
          variants={fadeInUp}
          custom={5}
        >
          <p className="text-xs sm:text-sm md:text-base mb-4 font-semibold">
            Trusted by creators and editors globally
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">YouTube</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>{" "}
            {/* Hide bullets on small screens */}
            <span className="text-gray-700">10,000+ Projects Completed</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="text-gray-700">500+ Active Users</span>
          </div>

          {/* Brand Logos Row */}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {/* Replace with your real partner/customer logo paths */}
            <img
              src="https://simpleicons.org/icons/youtube.svg"
              alt="Partner Logo 1"
              className="h-7 sm:h-8 filter grayscale opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://simpleicons.org/icons/canva.svg"
              alt="Partner Logo 2"
              className="h-7 sm:h-8 filter grayscale opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://simpleicons.org/icons/dropbox.svg
"
              alt="Partner Logo 3"
              className="h-7 sm:h-8 filter grayscale opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Star Rating Indicator */}
          <div className="mt-4 flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </motion.div>

        {/* --- New Feature/Highlight Block with typing animation --- */}
        <motion.div
          className="mt-8 flex justify-center px-2 sm:px-4"
          variants={fadeInUp}
          custom={6}
        >
          <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl shadow-md px-3 py-4 sm:px-6 sm:py-5 mx-auto mt-8">
            <p className="text-base sm:text-lg md:text-xl text-black-500 font-medium text-center leading-relaxed break-words">
              {!typedDone ? (
                <Typewriter
                  words={[
                    "Collaborate. Create. Review — all in one secure workspace, built for speed, security, and seamless creativity.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={28} // Smooth, readable pace
                  deleteSpeed={18} // If deletion is needed later
                  delaySpeed={800} // Short pause before finishing
                  onDone={handleTypingDone}
                />
              ) : (
                fullText
              )}
            </p>
          </div>
        </motion.div>

        <motion.div className="mt-14" variants={fadeInUp} custom={8}>
          <CardCarousel />
        </motion.div>
        <motion.div className="mt-16" variants={fadeInUp} custom={8}>
          <FeaturesSection />
        </motion.div>

        <motion.div className="mt-16" variants={fadeInUp} custom={8}>
          <TestimonialsSection />
        </motion.div>

        <motion.div className="mt-16" variants={fadeInUp} custom={8}>
          <PricingSection />
        </motion.div>

        <motion.div className="mt-16" variants={fadeInUp} custom={8}>
          <FAQSection />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <svg
          className="w-6 h-6 text-blue-400 animate-pulse"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div> */}
    </section>
  );
}
