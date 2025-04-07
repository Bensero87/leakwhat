
import { useState } from "react";
import { useRouter } from "next/router";

export default function PaymentPage() {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [consent, setConsent] = useState(false);

  const handlePayment = () => {
    if (!consent) {
      alert("Please accept the General Information Notice before proceeding.");
      return;
    }
    alert("Waiting for PayTR Integration...");
  };

  return (
    <div className="min-h-screen bg-[#0a0a23] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#2d2d3a] rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Payment</h1>
        <label className="block mb-2 text-sm">Card Number</label>
        <input
          type="text"
          className="w-full mb-4 p-2 rounded bg-gray-100 text-black"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-2 text-sm">Expiry Month</label>
            <input
              type="text"
              className="w-full mb-4 p-2 rounded bg-gray-100 text-black"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-sm">Expiry Year</label>
            <input
              type="text"
              className="w-full mb-4 p-2 rounded bg-gray-100 text-black"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            />
          </div>
        </div>
        <label className="block mb-2 text-sm">CVV</label>
        <input
          type="text"
          className="w-full mb-4 p-2 rounded bg-gray-100 text-black"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="mr-2"
            checked={consent}
            onChange={() => setConsent(!consent)}
          />
          <span className="text-sm">
            I have read and accept the{" "}
            <a href="/privacy-notice" target="_blank" className="underline text-blue-400">
              General Information Notice
            </a>
          </span>
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
