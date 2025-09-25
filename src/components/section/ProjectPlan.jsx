import { ArrowUp, Kanban, Star, Plus, List, BarChart3 } from "lucide-react"

export default function ProjectPlan() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* Management Label */}
        <div className="text-center mb-6">
          <span className="text-sm text-gray-400 uppercase tracking-wide">Management</span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-white">Agile Project Planning</h1>
        </div>

        {/* Description */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            Drive project success with agile project management capabilities tailored for small teams focused on rapid
            product development.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Sprint Planning */}
          <div className="bg-black-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="p-6">
              <div className="mb-4">
                <ArrowUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sprint Planning</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plan and execute sprints tasks efficiently within iterative sprint cycles.
              </p>
            </div>
          </div>

          {/* Kanban Boards */}
          <div className="bg-black-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="p-6">
              <div className="mb-4">
                <Kanban className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Kanban Boards</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Visualize project workflow and track task progress with customizable Kanban boards.
              </p>
            </div>
          </div>

          {/* Task Prioritization */}
          <div className="bg-black-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="p-6">
              <div className="mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Task Prioritization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Prioritize tasks based on urgency and importance to ensure efficient use of resources.
              </p>
            </div>
          </div>

          {/* Collaborative Task Boards */}
          <div className="bg-black-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="p-6">
              <div className="mb-4">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaborative Task Boards</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Collaboratively manage tasks and assignments in real-time, fostering teamwork and accountability.
              </p>
            </div>
          </div>

          {/* Backlog Management */}
          <div className="bg-black-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="p-6">
              <div className="mb-4">
                <List className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Backlog Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Maintain a backlog of tasks and user stories, ensuring a steady flow of work for your team.
              </p>
            </div>
          </div>

          {/* Burndown Charts */}
          <div className="bg-black-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="p-6">
              <div className="mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Burndown Charts</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Monitor project progress and identify potential bottlenecks with easy-to-read burndown charts.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-white hover:bg-white text-black px-6 py-2 rounded-lg cursor-pointer">
            Get started
          </button>
          <button className="border border-gray-600 text-white px-6 py-2 rounded-lg bg-transparent cursor-pointer">
            See more
          </button>
        </div>
      </section>
    </div>
  )
}
