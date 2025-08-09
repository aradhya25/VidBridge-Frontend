import React, { useState } from "react";
import {
  User,
  Briefcase,
  Diamond,
  Check,
  FileEdit,
  ArrowLeft,
} from "lucide-react";
function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 1,
      name: "Creator Standard",
      description: "Perfect for Solo creators",
      icon: User,
      monthlyPrice: 10,
      annualPrice: 8,
      features: [
        "Real-time audience analytics",
        "Unlimited raw footage uploads",
        "Simple video review & approval",
        "YouTube Channel integration",
        "Direct chat & calls with editors",
        "Auto-publish videos to YouTube",
      ],
      buttonText: "Subscribe Now",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: 2,
      name: "Editor Pro",
      description: "Designed for Freelance editors",
      icon: FileEdit,
      monthlyPrice: 10,
      annualPrice: 8,
      features: [
        "Custom profile to showcase skills",
        "Manage multiple creators",
        "Fast upload of  edited videos",
        "Instant notifications for feedback",
        "Access of editing analytics",
        "Team collaboration tools",
      ],
      buttonText: "Subscribe Now",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: 3,
      name: "Team Workspace",
      description: "Designed for Small agencies",
      icon: Briefcase,
      monthlyPrice: 20,
      annualPrice: 10,
      features: [
        "Manage multiple channels",
        "Advanced channel analytics",
        "Custom workflow automation",
        "Team collaboration tools",
        "White-label reports",
        "Enhanced storage capacity",
      ],
      buttonText: "Subscribe Now",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  ];

  return (
    <section className="w-full py-10 px-4 max-w-5xl mx-auto">
      <div>
        <div className="mb-6 flex justify-start">
          <a
            href="/home"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 text-base font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Home
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-600 font-medium text-sm">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
            Flexible Plans for Every Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed mb-10">
            From Solo Creators to Full Teams—We've Got You Covered
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                !isAnnual
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                isAnnual
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual billing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-50 flex flex-col h-full group"
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-900">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-600 font-medium text-base">
                          /mth
                        </span>
                      </div>
                      {isAnnual && (
                        <div className="mt-1">
                          <span className="text-sm text-gray-500 line-through">
                            ${plan.monthlyPrice}/mth
                          </span>
                          <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                            Save 20%
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-gray-900">
                      {plan.priceText}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-3 text-sm">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="space-y-3">
                  <button
                    className={`w-full py-2 px-4 rounded-full font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-sm ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                  <p className="text-center text-gray-500 text-xs cursor-pointer">
                    Need more information? Let's chat
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
            <span>✓ 24/7 Customer Support</span>
            <span>✓ 99.9% Uptime Guarantee</span>
            <span>✓ GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
