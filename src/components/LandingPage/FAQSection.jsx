import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(null);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "What is VidBridge??",
      answer:
        "VidBridge is a secure collaboration platform that connects YouTube creators with professional editors. It streamlines the entire post-production workflow—from uploading raw footage and reviewing edits to publishing directly on YouTube.",
    },
    {
      question:
        "How does VidBridge ensure my content’s security?",
      answer:
        "Your files are transferred using encrypted connections, and all projects remain accessible only to you and your approved editors. VidBridge integrates with YouTube via a secure API, so your credentials are never exposed.",
    },
    {
      question: "Can I collaborate with multiple editors at the same time?",
      answer:
        "Yes! VidBridge supports real-time collaboration features like chat, calls, and time-stamped feedback, making it easy to work with one or multiple editors simultaneously on the same project.",
    },
    {
      question: "Do I need to download any software to use VidBridge?",
      answer:
        "No downloads are required—VidBridge is entirely web-based. You can access your projects, chat, and review edits from any device with an internet connection.",
    },
    {
      question: "Does VidBridge handle publishing to YouTube automatically?",
      answer:
        "Yes. Once you approve the final edit, VidBridge can upload the video directly to your YouTube channel via the secure API integration—saving you time and effort.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-600 font-medium text-sm">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Find answers to the most common questions about VidBridge.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100/50 px-5 py-4 hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-base font-medium text-black-500 py-1"
                aria-expanded={openItem === index}
                aria-controls={`faq-content-${index}`}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 cursor-pointer ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Smooth auto height transition */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight:
                    openItem === index
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease, opacity 0.3s ease",
                  opacity: openItem === index ? 1 : 0,
                }}
              >
                <p className="text-gray-600 text-sm px-2 pt-2 text-justify">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
