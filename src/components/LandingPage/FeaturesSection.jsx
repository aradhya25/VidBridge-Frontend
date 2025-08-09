import { Upload,MessageCircle,CheckCircle,UserCheck } from "lucide-react"


export default function FeaturesSection() {
  return (
    <section className="w-full py-12 px-4 sm:py-16 md:py-20 max-w-5xl mx-auto">
      <div>
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-600 font-medium text-xs sm:text-sm tracking-wide ">Our Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-2 ">
            Why Choose VidBridge?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-6">
            Seamless Collaboration, Smarter Workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 px-2 sm:px-0">
          {[
            {
              title: "Upload Raw Footage Easily",
              description:
                "Increase your earning potential. Track ad performance, manage campaigns, and make data-driven decisions to improve your ROI.",
              icon: <Upload className="text-blue-600 w-5 h-5" />,
              bg: "from-indigo-100 to-indigo-200",
            },
            {
              title: "Editor-Only Access",
              description:
                "All your data in one place. With TechTribe's intuitive interface, view all metrics in an organized and visually clear dashboard for easy analysis.",
              icon: <UserCheck className="text-blue-600 w-5 h-5" />,
              bg: "from-pink-100 to-pink-200",
            },
            {
              title: "Real-time Feedback & Chat",
              description:
                "Stay up to date with your social media performance. We provide instant analytics, helping you react quickly to changes in your audience and engagement.",
              icon: <MessageCircle className="text-blue-600 w-5 h-5" />,
              bg: "from-green-100 to-green-200",
            },
            {
              title: "Approve and Publish in One Click",
              description:
                "Understand your followers on a deeper level. Access detailed demographic and behavioral data to refine your targeting and content strategy.",
              icon: <CheckCircle className="text-blue-600 w-5 h-5" />,
              bg: "from-yellow-100 to-yellow-200",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-tr ${feature.bg} rounded-xl flex items-center justify-center mb-5 shadow-sm`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
