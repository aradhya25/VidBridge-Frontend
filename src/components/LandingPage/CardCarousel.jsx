"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"

const features = [
  {
    id: 1,
    icon: "🎬",
    title: "From Raw Footage to Published Video—Effortlessly",
    subtitle: "Unlock Channel Insights",
    description:
      "Upload your clips, connect with a professional editor, review final edits, and publish directly to YouTube—VidBridge streamlines your entire post-production workflow.",
    bgColor: "bg-blue-50",
    buttonText: "Get Started",
    mockup: "/images/CardCaraousel/card_1.jpg",
  },
  {
    id: 2,
    icon: "💬",
    title: "Seamless Real-Time Collaboration",
    subtitle: "Work Together, Instantly",
    description:
      "Chat, call, and share feedback securely within VidBridge for faster revisions and seamless collaboration between creators and editors—keeping your workflow smooth and efficient.",
    bgColor: "bg-orange-50",
    buttonText: "Get Started",
    mockup: "/images/CardCaraousel/card_2.jpg",
  },
  {
    id: 3,
    icon: "📤",
    title: "Effortless YouTube Publishing",
    subtitle: "Turn followers into clients",
    description:
      "Approve your final video and let VidBridge handle the upload to your YouTube channel automatically via the secure API integration—no extra steps, no hassle.",
    bgColor: "bg-purple-50",
    buttonText: "Get Started",
    mockup: "/images/CardCaraousel/card_3.jpg",
  },
]

export function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.7s ease-in-out"
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`${feature.bgColor} w-full flex-shrink-0 px-3 py-6 md:px-6 md:py-8`}
              >
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-5 max-w-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-xl md:text-2xl">{feature.icon}</div>
                      <div className="text-sm uppercase text-gray-500 font-semibold tracking-wide">
                        {feature.subtitle}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed break-words">
                      {feature.description}
                    </p>
                    <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mr-7 rounded-full shadow-md transition transform hover:scale-105 cursor-pointer">
                      {feature.buttonText}
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-md"
                  >
                    <img
                      src={feature.mockup}
                      alt={`${feature.title} mockup`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8 md:mt-10">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
