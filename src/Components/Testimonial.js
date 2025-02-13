import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  { question: "What is Redifu?", answer: "Redifu is a web application that connects the Kibera community with organizations managing food waste." },
  { question: "How does Redifu work?", answer: "It acts as a bridge between food donors and recipients, ensuring food is efficiently redistributed to those in need." },
  { question: "Who can use Redifu?", answer: "Food donors, recipients, NGOs, and corporate partners can all participate in the platform." },
  { question: "Is Redifu free to use?", answer: "Yes, the platform is completely free for donors and recipients." },
  { question: "How can I donate food?", answer: "You can sign up on the platform, list available food, and arrange for pickup or drop-off." },
  { question: "How does Redifu get funding?", answer: "We rely on grants, corporate partnerships, crowdfunding, and impact investments." },
  { question: "Where is Redifu currently operating?", answer: "We are launching in Kibera as our pilot project, with plans for future expansion." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full flex justify-between items-center text-lg font-medium py-2 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
