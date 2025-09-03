import React, { useMemo, useState } from "react";

export default function CreateProject({ onSubmit }) {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    editorId: "",
    channelId: "",
    deadline: "",
    rawFiles: [],
  });

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "rawFiles") {
      const list = Array.from(files || []);
      setFormData((p) => ({ ...p, rawFiles: list }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const removeFileAt = (idx) => {
    setFormData((p) => ({
      ...p,
      rawFiles: p.rawFiles.filter((_, i) => i !== idx),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await onSubmit?.(formData);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto p-4 sm:p-6 font-sans">
      {/* Header */}
      <header className="mb-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5">
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 text-blue-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h5.379c.597 0 1.169.237 1.59.659l1.122 1.122c.421.421.993.659 1.59.659H18.75A2.25 2.25 0 0 1 21 7.691v10.059A2.25 2.25 0 0 1 18.75 20H5.25A2.25 2.25 0 0 1 3 17.75V5.25z" />
          </svg>
          <span className="text-xs font-medium text-blue-700">
            Project Setup
          </span>
        </div>
        <h1 className="mt-1 text-xl font-bold text-gray-900">
          Create New Project
        </h1>
        <p className="mt-0.5 text-sm text-gray-600">
          Complete the details below. Fields marked with
          <span className="px-1 text-blue-600"> *</span> are required.
        </p>
      </header>

      {/* Card */}
      <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Project Title */}
            <div className="md:col-span-2">
              <label
                htmlFor="title"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Project Title <span className="text-blue-600">*</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="e.g., Summer Campaign Video"
                className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-gray-900 placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:border-blue-500 focus:ring-blue-100 text-sm"
                value={formData.title}
                onChange={handleChange}
              />
              <p className="mt-0.5 text-xs text-gray-500">
                A clear, concise title helps collaborators understand scope.
              </p>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Description <span className="text-blue-600">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                placeholder="Provide a brief overview, goals, and any key notes…"
                className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-gray-900 placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:border-blue-500 focus:ring-blue-100 text-sm"
                value={formData.description}
                onChange={handleChange}
              />
              <p className="mt-0.5 text-xs text-gray-500">
                Include goals, deliverables, and audience to align the team.
              </p>
            </div>

            {/* Assign Editor (optional) */}
            <div>
              <label
                htmlFor="editorId"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Assign Editor (Optional)
              </label>
              <input
                id="editorId"
                name="editorId"
                type="text"
                placeholder="Editor ID or email"
                className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-gray-900 placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:border-blue-500 focus:ring-blue-100 text-sm"
                value={formData.editorId}
                onChange={handleChange}
              />
              <p className="mt-0.5 text-xs text-gray-500">
                You can assign or change an editor later.
              </p>
            </div>

            {/* Channel ID */}
            <div>
              <label
                htmlFor="channelId"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Channel ID <span className="text-blue-600">*</span>
              </label>
              <input
                id="channelId"
                name="channelId"
                type="text"
                required
                placeholder="e.g., YT-Primary-01"
                className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-gray-900 placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:border-blue-500 focus:ring-blue-100 text-sm"
                value={formData.channelId}
                onChange={handleChange}
              />
              <p className="mt-0.5 text-xs text-gray-500">
                Identify where this project will be published.
              </p>
            </div>

            {/* Deadline */}
            <div>
              <label
                htmlFor="deadline"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Deadline <span className="text-blue-600">*</span>
              </label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                required
                min={today}
                className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-gray-900 outline-none ring-2 ring-transparent transition focus:border-blue-500 focus:ring-blue-100 text-sm"
                value={formData.deadline}
                onChange={handleChange}
              />
              <p className="mt-0.5 text-xs text-gray-500">
                Choose a realistic due date to plan reviews and edits.
              </p>
            </div>

            {/* Raw Files */}
            <div className="md:col-span-2">
              <label
                htmlFor="rawFiles"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Upload Raw Files
              </label>

              <label
                htmlFor="rawFiles"
                className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white px-3 py-10 text-center transition hover:border-blue-400 hover:bg-blue-50"
              >
                <svg
                  aria-hidden="true"
                  className="mb-2 h-7 w-7 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4a1 1 0 0 1 1 1v7.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.001 4a1 1 0 0 1-1.414 0l-4.001-4a1 1 0 1 1 1.414-1.414L11 12.586V5a1 1 0 0 1 1-1z" />
                  <path d="M5 15a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" />
                </svg>
                <div className="text-sm text-gray-700">
                  <span className="font-medium text-blue-700">Click to upload</span> or drag and drop
                </div>
                <p className="mt-0.5 text-xs text-gray-500">
                  Supported: videos, images, audio, docs. Multiple files allowed.
                </p>
              </label>
              <input
                id="rawFiles"
                name="rawFiles"
                type="file"
                multiple
                onChange={handleChange}
                className="sr-only"
              />

              {/* File List */}
              {formData.rawFiles?.length > 0 && (
                <ul className="mt-3 divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200">
                  {formData.rawFiles.map((file, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-2 p-2"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-blue-50 text-blue-700">
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4 6a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 18 9.414V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
                          </svg>
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-medium text-gray-900">
                            {file.name}
                          </p>
                          <p className="truncate text-xs text-gray-500">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFileAt(idx)}
                        className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-2 py-2 text-xs font-medium text-gray-700 transition hover:border-red-300 hover:text-red-600 cursor-pointer"
                        aria-label={`Remove ${file.name}`}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  title: "",
                  description: "",
                  editorId: "",
                  channelId: "",
                  deadline: "",
                  rawFiles: [],
                })
              }
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 cursor-pointer"
            >
              Clear
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
            >
              {submitting && (
                <svg
                  className="h-3 w-3 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-30"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    className="opacity-90"
                    d="M22 12a10 10 0 0 1-10 10"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              Create Project
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
