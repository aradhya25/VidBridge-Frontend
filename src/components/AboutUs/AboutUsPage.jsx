import React from "react";
import { ArrowLeft } from "lucide-react";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Aradhya Kulkarni",
      role: "Full Stack Developer",
      description:
        "Aradhya Kulkarni is a dynamic Full Stack Developer with expertise in Spring Boot, PostgreSQL, and React.js. With a passion for scalable, high-performance applications and seamless user experiences, Aradhya consistently delivers modern, reliable solutions.",
      avatar: "/placeholder.svg?height=120&width=120&text=AK",
    },
    {
      name: "Om Kaware",
      role: "Full Stack Developer",
      description:
        "Om Kaware specializes in React.js, crafting intuitive, high-performance user interfaces. Passionate about seamless UX and technical innovation, Om delivers elegant, efficient solutions that delight users.",
      avatar: "/placeholder.svg?height=120&width=120&text=OK",
    },
    {
      name: "Nilay Nikam",
      role: "Frontend Developer",
      description:
        "Nilay Nikam focuses on intuitive, responsive React.js web interfaces. With strong attention to detail and a drive for innovation, Nilay creates dynamic experiences that enhance user engagement.",
      avatar: "/placeholder.svg?height=120&width=120&text=NN",
    },
    {
      name: "Piyush Mahajan",
      role: "Backend Developer",
      description:
        "Piyush Mahajan is a backend specialist dedicated to robust, scalable APIs and seamless integration. Known for reliability and technical depth, Piyush ensures the backend runs smoothly and efficiently.",
      avatar: "/placeholder.svg?height=120&width=120&text=PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-4 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back to Home Link */}
        <div className="mb-6">
          <a
            href="/home"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200 text-base font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Home
          </a>
        </div>
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Development Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the talented developers behind VidBridge. Our team is dedicated
            to creating the best experience for creators and editors.
          </p>
        </div>
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium text-base mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
