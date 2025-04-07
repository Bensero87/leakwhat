// pages/index.js

import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const services = [
    {
      title: "E-mail Lookup",
      price: "$5",
      route: "/email-lookup",
    },
    {
      title: "Phone Number Lookup",
      price: "$5",
      route: "/phone-lookup",
    },
    {
      title: "E-mail + Phone Lookup",
      price: "$9",
      route: "/email-phone-lookup",
    },
  ];

  const handleChoose = (route) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen bg-[#0a0f24] text-white px-4 py-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="text-xl font-bold">LeakWhat</div>
        <div className="space-x-6 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/databases" className="hover:underline">
            Databases
          </a>
          <a href="/faq" className="hover:underline">
            FAQ
          </a>
        </div>
      </nav>

      {/* Headline */}
      <h1 className="text-2xl font-bold text-white text-center mb-10">
        Make sure your credentials haven't been compromised
      </h1>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-700 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-lg">{service.price}</p>
            </div>
            <button
              onClick={() => handleChoose(service.route)}
              className="mt-4 px-4 py-2 rounded-xl bg-white text-black hover:bg-gray-200 font-semibold"
            >
              Choose this
            </button>
          </div>
        ))}
      </div>

      {/* Use Cases */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Protecting Yourself</h3>
            <p>Find out if your data has been compromised as a result of any breach.</p>
          </div>
          <div className="bg-gray-700 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Password Leakage</h3>
            <p>Find out if your password algorithm has been compromised as a result of any breach.</p>
          </div>
          <div className="bg-gray-700 text-white rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Detecting Password Leakage</h3>
            <p>Find out if you need to change your password.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        <p>Contact: <a href="mailto:leakwhat@leakwhat.com" className="underline">leakwhat@leakwhat.com</a></p>
      </footer>
    </div>
  );
}
