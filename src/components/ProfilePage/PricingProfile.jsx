"use client"

import { useState } from "react"
import { Check, ExternalLink } from "lucide-react"

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const plans = [
    {
      name: "Free",
      price: 0,
      period: "/month for one person",
      description: "Conceptualize anything and bring your ideas to life. No cost, but with limits.",
      features: [
        "1 project",
        "1 page",
        "Share - Read-only link",
        "Export - Figma only",
        "30 Webflow components",
        "30 React components",
        "1000+ Figma components",
      ],
      buttonText: "Current plan",
      buttonVariant: "outline",
      targetUser: {
        title: "New Designer or Developer",
        description:
          "New to the industry and DesignAli. Usual projects are basic 1-page landing pages, requiring little to no collaboration.",
        avatar: "👨‍💻",
      },
    },
    {
      name: "DesignAli Starter",
      price: isYearly ? 14 : 18,
      period: "/month for one person",
      description: "Unlock extended functionality and turn those ideas into small websites.",
      features: [
        "1 project",
        "5 pages",
        "Share - Commenting",
        "Export - Figma, Webflow & React",
        "1000+ Webflow components",
        "1000+ React components",
        "1000+ Figma components",
      ],
      buttonText: "Continue with Starter",
      buttonVariant: "default",
      targetUser: {
        title: "Part-time Freelancer",
        description:
          "A seasoned designer and dev with a full-time job, often takes on a medium sized website project, normally only needing one project per month.",
        avatar: "👩‍💼",
      },
    },
    {
      name: "DesignAli Pro",
      price: isYearly ? 28 : 40,
      period: "/month for one person",
      description: "Complete freedom with unlimited access to build websites of any size.",
      features: [
        "Unlimited Projects",
        "Unlimited Pages",
        "Share - Commenting",
        "Export - Figma, Webflow & React",
        "1000+ Webflow components",
        "1000+ React components",
        "1000+ Figma components",
      ],
      buttonText: "Continue with Pro",
      buttonVariant: "default",
      isPopular: true,
      targetUser: {
        title: "Full-time Freelancer",
        description:
          "An experienced freelancer managing larger projects with more pages and ongoing client maintenance, requiring more project slots.",
        avatar: "👨‍🎨",
      },
    },
    {
      name: "DesignAli Team",
      price: isYearly ? 25 : 36,
      period: "/month per person (Min 3 people)",
      description: "Bring your team over with all Pro access and enhanced collaboration.",
      features: [
        "Everything in Pro +",
        "3 users included",
        "Each user with Pro features",
        "Team workspace",
        "Branded sharing",
      ],
      buttonText: "Continue with Team",
      buttonVariant: "default",
      targetUser: {
        title: "Agency or Team",
        description:
          "Collaborates with a team on multiple large website projects, benefiting from unlimited projects and extra membership seats.",
        avatar: "👥",
      },
    },
  ]

  const companyLogos = [
    { name: "Nike", logo: "✓" },
    { name: "Webflow", logo: "🌊" },
    { name: "ROIT", logo: "R" },
    { name: "IDEO", logo: "I" },
    { name: "DEPT", logo: "D" },
    { name: "WML", logo: "W" },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`border-b transition-colors duration-300 ${
          isDarkMode ? "border-slate-700 bg-slate-800" : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <span className="font-semibold text-lg">DesignAli</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? "bg-slate-700 hover:bg-slate-600" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Plans that evolve with your projects.</h1>
          <p className="text-xl md:text-2xl text-balance">
            Try with your <span className="text-purple-600 font-semibold">team 👥👩‍💼👨‍💼</span> for free.
          </p>
        </div>

        {/* Company Logos */}
        <div className="text-center mb-12">
          <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Teams already on DesignAli</p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                <span className="text-lg">{company.logo}</span>
                <span className="font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Yearly Discount Toggle */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-3">
            <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Yearly discount (30%)</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 
                              peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                              after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                              after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
            </label>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border-2 p-6 transition-all duration-300 ${
                plan.isPopular
                  ? isDarkMode
                    ? "border-purple-500 bg-slate-800 shadow-lg shadow-purple-500/20"
                    : "border-purple-500 bg-white shadow-lg shadow-purple-500/20"
                  : isDarkMode
                    ? "border-slate-600 bg-slate-800 hover:border-slate-500"
                    : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className={`text-sm ml-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>USD</span>
                </div>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{plan.period}</p>
              </div>

              <p className={`text-sm mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{plan.description}</p>

              <button
                className={`w-full mb-6 px-4 py-2 rounded-lg font-medium transition-colors ${
                  plan.buttonVariant === "outline"
                    ? isDarkMode
                      ? "border border-slate-600 text-gray-300 hover:bg-slate-700"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {plan.buttonText}
              </button>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={`border-t pt-4 ${isDarkMode ? "border-slate-600" : "border-gray-200"}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">{plan.targetUser.avatar}</span>
                  <span className="font-medium text-sm">{plan.targetUser.title}</span>
                </div>
                <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {plan.targetUser.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compare Features Link */}
        <div className="text-center">
          <button
            className={`inline-flex items-center space-x-1 text-sm hover:underline ${
              isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-700"
            }`}
          >
            <span>Compare all features</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}
