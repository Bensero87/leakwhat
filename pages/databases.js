// pages/databases.js

import React from "react";

const databases = [
  {
    name: "Alphamountain",
    description:
      "Get reputation scores for hosts, domains, and IP addresses to support your investigations.",
  },
  {
    name: "Censys",
    description:
      "Monitor and analyze unknown internet assets and attack surfaces.",
  },
  {
    name: "DNS Twist",
    description:
      "Identify and analyze potential phishing domains effectively.",
  },
  {
    name: "Farsight DNSDB",
    description:
      "Access real-time and historical DNS data for threat intelligence.",
  },
  {
    name: "Google Maps",
    description:
      "Normalize and enrich location data during your investigations.",
  },
  {
    name: "Image Analyzer",
    description:
      "Detect faces, text, objects, and landmarks in image files.",
  },
  {
    name: "PolySwarm",
    description:
      "Retrieve malware insights from file hashes, IPs, and domains.",
  },
  {
    name: "Scamadviser",
    description:
      "Detect suspicious domains and scan scam networks quickly.",
  },
  {
    name: "TinEye",
    description:
      "Perform reverse image searches for copyright and fraud detection.",
  },
];

export default function Databases() {
  return (
    <div className="min-h-screen bg-[#0a0f24] px-4 py-10">
      <h1 className="text-white text-3xl font-bold text-center mb-10">
        LeakWhat - Available Data Providers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {databases.map((db, index) => (
          <div
            key={index}
            className="bg-[#2d2f3a] p-6 rounded-2xl shadow-md border border-gray-700"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {db.name}
            </h2>
            <p className="text-gray-300">{db.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
