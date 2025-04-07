// pages/email-lookup.js

import React, { useState } from "react";
import { useRouter } from "next/router";

export default function EmailLookup() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please accept the Privacy Notice to continue.");
      return;
    }
    // Geçici yönlendirme - Ödeme entegrasyonu sonrası güncellenecek
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-[#0a0f24] flex items-center justify-center px-4 py-12">
      <div className="bg-[#2d2f3a] p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          E-mail Lookup
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Enter your e-mail address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-[#1a1c2c] text-white border border-gray-600 focus:outline-none"
              placeholder="you@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-start text-white">
            <input
              type="checkbox"
              id="consent"
              className="mr-2 mt-1"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="consent" className="text-sm">
              I accept the{" "}
              <a
                href="/privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-400"
              >
                Privacy Notice
              </a>
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-md ${
              isChecked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!isChecked}
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
