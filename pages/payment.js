// pages/payment.js

import React, { useState } from "react";

export default function PaymentPage() {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accepted) {
      alert("This is a placeholder. PayTR integration will be added.");
    } else {
      alert("You must accept the Privacy Notice to continue.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f24] text-white px-6 py-10">
      <div className="max-w-xl mx-auto bg-gray-700 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Payment Details</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Card Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Expiry Month</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                placeholder="MM"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Expiry Year</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                placeholder="YY"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">CVV</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              placeholder="123"
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1"
            />
            <label className="text-sm">
              I have read and accept the{" "}
              <a
                href="/privacy-notice"
                className="underline text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Notice
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={!accepted}
            className={`w-full py-2 mt-4 rounded-xl font-semibold ${
              accepted
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
