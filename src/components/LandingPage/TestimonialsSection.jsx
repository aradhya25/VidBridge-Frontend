import { useNavigate } from "react-router-dom";
export default function TestimonialsSection() {
  const navigate = useNavigate();
  const testimonials = [
    {
      id: 1,
      text: "VidBridge cut my editing time in half! I just upload the footage and my editor delivers exactly what I envisioned—no back-and-forth chaos.",
      author: "Aarav Mehta,",
      role: "Travel Vlogger",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text: "The real-time feedback feature is a game changer. My editor and I can make changes instantly, and the video is ready to publish within hours.",
      author: "Sofia Khan",
      role: "Lifestyle Creator",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 3,
      text: "I love how secure it feels. My raw footage never leaves the platform, and the direct YouTube upload saves me so much time.",
      author: "Daniel Verma",
      role: "Tech Reviewer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      text: "Before VidBridge, managing edits with freelancers was messy. Now, it’s smooth, organized, and I never miss a deadline.",
      author: "Riya Sharma",
      role: "Fitness Coach",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      text: "As a small team, VidBridge helps us stay on top of multiple projects without losing quality or speed. It’s like having a full post-production department online.",
      author: "Karan Patel",
      role: "Music Producer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 6,
      text: "The seamless collaboration tools made me feel like my editor was sitting right next to me—even though we’re on opposite sides of the world.",
      author: "Emily Thomas",
      role: "Food Blogger",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-blue-600 font-medium text-sm">
            Creator Stories
          </span>
        </div>
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 relative inline-block tracking-tight leading-tight">
            What Our Creators Say
          </h2>
          <p className="text-sm sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            See what our creators have to say about their experience with
            VidBridge.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex-1">
                <div className="mb-5">
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    {testimonial.text}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 mt-auto border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200"
                />
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-md mb-6">
            Join thousands of satisfied customers
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 py-3 cursor-pointer rounded-full  transition-colors duration-200 shadow hover:shadow-lg"
          >
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
