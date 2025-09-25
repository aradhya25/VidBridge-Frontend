import React, { useState } from "react";

function CreateProjectForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    editorId: "",
    channelId: "",
    deadline: "",
    rawFiles: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "rawFiles") {
      setFormData({ ...formData, rawFiles: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // pass form data to parent
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-2">
        🎬 Create New Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Project Title
          </label>
          <input
            type="text"
            name="title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Description
          </label>
          <textarea
            name="description"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Editor (optional) */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Assign Editor (Optional)
          </label>
          <input
            type="text"
            name="editorId"
            placeholder="Enter Editor ID"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.editorId}
            onChange={handleChange}
          />
        </div>

        {/* Channel */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Channel ID
          </label>
          <input
            type="text"
            name="channelId"
            placeholder="Enter Channel ID"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.channelId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>

        {/* Raw Files */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Upload Raw Files
          </label>
          <input
            type="file"
            name="rawFiles"
            multiple
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
