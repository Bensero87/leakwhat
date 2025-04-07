// pages/faq.js

import React from "react";

const faqs = [
  {
    question: "What is LeakWhat?",
    answer:
      "LeakWhat is a platform that allows you to check if your e-mail address or phone number has appeared in any data breaches available on the internet.",
  },
  {
    question: "How does LeakWhat work?",
    answer:
      "We collect and organize leaked data from publicly available sources. You provide an e-mail or phone number, and we check if it appears in any of those breaches.",
  },
  {
    question: "Is it legal to use LeakWhat?",
    answer:
      "Yes. We only use data that is publicly available from open sources. We do not sell, distribute, or store any of your personal data.",
  },
  {
    question: "What data do you store?",
    answer:
      "We do not store any input data (such as e-mails or phone numbers) or the results. Everything is processed on the fly, and your input is discarded afterward.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer three types of lookups: E-mail Lookup ($5), Phone Lookup ($5), and E-mail + Phone Lookup ($9).",
  },
  {
    question: "Is my payment information safe?",
    answer:
      "Yes. We use PayTR’s secure infrastructure to handle all payments. LeakWhat does not access or store any card details.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#0a0f24] text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#2c2e38] rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
