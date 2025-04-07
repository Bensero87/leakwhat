// pages/phone-lookup.js

import { useState } from "react";
import { useRouter } from "next/router";

export default function PhoneLookup() {
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (!accepted) {
      alert("You must accept the Privacy Notice before continuing.");
      return;
    }

    // Ödeme sayfasına yönlendirme
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-[#0a0f24] text-white flex items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Phone Lookup</h1>

        <label className="block mb-2 text-sm">Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+90 555 123 4567"
          className="w-full px-4 py-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none"
        />

        <div className="flex items-start mb-4">
          <input
            type="checkbox"
            className="mt-1 mr-2"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          <label className="text-sm">
            I accept the{" "}
            <a
              href="/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Privacy Notice
            </a>
            .
          </label>
        </div>

        <button
          onClick={handleContinue}
          disabled={!phone || !accepted}
          className={`w-full py-2 rounded-xl font-semibold ${
            phone && accepted
              ? "bg-white text-black hover:bg-gray-300"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
