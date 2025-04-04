
import React from 'react';

export default function DatabasesPage() {
  const databases = [
    { name: "BuiltWith", description: "Analyzes website technologies and infrastructure." },
    { name: "Shodan", description: "Scans IP addresses to reveal open ports and security vulnerabilities." },
    { name: "WhoisXML", description: "Provides comprehensive WHOIS data for domains and IP addresses." },
    { name: "IPQS", description: "Analyzes fraud and spam risks using IP and email validation." },
    { name: "Censys", description: "Provides scan data to discover network assets and analyze vulnerabilities." },
    { name: "Google Maps", description: "Standardizes location data and supports mapping-based analysis." },
    { name: "PolySwarm", description: "Delivers malware insights based on file hashes, domains, and IP addresses." },
    { name: "TinEye", description: "Performs reverse image search to track images across the web." },
    { name: "GreyNoise", description: "Provides context on internet scanning IP addresses." },
    { name: "Security Trails", description: "Analyzes domain data like DNS, WHOIS, and IP history." },
    { name: "SpyOnWeb", description: "Maps relationships between web properties through shared identifiers." },
    { name: "OpenCNAM", description: "Returns caller name information for phone numbers." },
    { name: "Image Analyzer", description: "Automatically detects faces, text, and objects in images." },
    { name: "Scamadviser", description: "Quickly identifies suspicious or scam websites." },
    { name: "DNS Twist", description: "Detects phishing domains using typo-squatting patterns." },
    { name: "Alphamountain", description: "Provides reputation scores for IPs and domains." },
    { name: "Farsight DNSDB", description: "Builds connections using real-time and historical DNS data." }
  ];

  return (
    <div className="min-h-screen bg-[#0a2540] text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">LeakWhat - Available Data Providers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {databases.map((db, idx) => (
          <div key={idx} className="bg-gray-700 text-white rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">{db.name}</h2>
            <p className="text-sm">{db.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
