import { Check, MessageCircle, Users, Lock } from "lucide-react"

export default function Features() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Real-Time Messaging Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Real-Time Messaging</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our platform offers instantaneous messaging to keep your team connected and responsive. This ensures that
              all team members are aligned and can react quickly to any updates or changes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">Instant message delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">User status indicators (online, offline, busy)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">Group and private chat options</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                  wdyt about last changes?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
                  looks great, ship it!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Task Management Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="mb-4">
              <button className="w-full border border-gray-600 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                + Add new task
              </button>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">Copy</span>
                <button className="text-gray-400 hover:text-white">⋮</button>
              </div>

              <h3 className="font-semibold text-white mb-2">New feature Blog post</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Write a comprehensive blog post highlighting the key benefits and innovative features of our latest
                feature, emphasizing its impact on user experience.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-gray-800"></div>
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-800"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800"></div>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>12</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Integrated Task Management</h2>
            <p className="text-gray-300 leading-relaxed">
              Enhance communication by integrating discussions directly with tasks. This feature allows team members to
              collaborate more effectively by linking conversations to specific projects or tasks.
            </p>
          </div>
        </div>

        {/* Secure Communication Channels Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Secure Communication Channels</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Prioritize security in team communications with end-to-end encryption. This feature helps in protecting
              sensitive information while allowing team members to collaborate in a secure environment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">End-to-end encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">Secure file sharing and storage</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">Compliance with global security standards</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-white font-medium">End-to-end encrypted backup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
