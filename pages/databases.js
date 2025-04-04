
import React from 'react';

export default function DatabasesPage() {
  const databases = [
    { name: "BuiltWith", description: "Website teknolojilerini ve yapılarını analiz eder." },
    { name: "Shodan", description: "IP adreslerini tarayarak açık portlar ve güvenlik açıkları hakkında bilgi sunar." },
    { name: "WhoisXML", description: "Alan adları ve IP adresleri hakkında kapsamlı WHOIS verisi sağlar." },
    { name: "IPQS", description: "Dolandırıcılık ve spam risklerini analiz etmek için IP ve e-mail doğrulama sunar." },
    { name: "Censys", description: "Ağ varlıklarını keşfetmek ve güvenlik açıklarını analiz etmek için tarama verisi sağlar." },
    { name: "Google Maps", description: "Lokasyon verilerini standartlaştırır ve harita üzerinde analiz yapılmasını sağlar." },
    { name: "PolySwarm", description: "Dosya hashleri, alan adları ve IP adresleri üzerinden kötü amaçlı yazılım bilgisi sağlar." },
    { name: "TinEye", description: "Görsel tersine arama ile görselin internet üzerindeki izini sürer." },
    { name: "GreyNoise", description: "İnternet tarayıcı IP'lerinin aktiviteleri hakkında bilgi verir." },
    { name: "Security Trails", description: "DNS, WHOIS ve IP adresi geçmişi gibi alan verilerini analiz eder." },
    { name: "SpyOnWeb", description: "Ortak bağlantılarla web varlıkları arasındaki ilişkileri analiz eder." },
    { name: "OpenCNAM", description: "Telefon numaraları için arayan adı bilgisi sağlar." },
    { name: "Image Analyzer", description: "Görsellerdeki yüzleri, yazıları ve nesneleri otomatik olarak tanımlar." },
    { name: "Scamadviser", description: "Şüpheli alan adlarını ve sahte siteleri hızlıca tanımlar." },
    { name: "DNS Twist", description: "Phishing (oltalama) amaçlı alan adlarını tespit eder." },
    { name: "Alphamountain", description: "IP ve alan adları için itibar puanı sağlar." },
    { name: "Farsight DNSDB", description: "Gerçek zamanlı ve geçmişe dönük DNS verisiyle bağlantı ağı oluşturur." },
    { name: "Intezer Analyze", description: "Genetik kötü amaçlı yazılım analizleri sunar." },
    { name: "urlscan.io", description: "URL’leri analiz ederek içerik, güvenlik ve ağ bilgisi sunar." },
    { name: "Etherscan", description: "Ether bazlı blok zinciri işlemlerini izler." },
    { name: "Dorking", description: "Gelişmiş Google aramalarıyla açık sunucuları ve dosyaları keşfeder." },
    { name: "OpenPhish", description: "Phishing saldırılarını tespit edip önlemeye yardımcı olur." },
    { name: "Constella Intelligence", description: "Sosyal mühendislik ve veri sızıntılarına karşı dijital kimlik analizleri sunar." },
    { name: "Cybersixgill", description: "Deep ve dark web verilerinden tehdit istihbaratı sağlar." },
    { name: "ShadowDragon", description: "150+ sosyal medya üzerinden OSINT veri bağlantılarını haritalar." },
    { name: "Tisane Labs", description: "NLP ile suç, tehdit ve nefret söylemlerini çok dilli analiz eder." },
    { name: "FlightAware", description: "Uçuş rotaları, sahiplik bilgisi ve tarihsel uçuş verilerini sunar." },
    { name: "hunter", description: "E-mail adresi bulma ve doğrulama işlemleri yapar." },
    { name: "OpenCorporates", description: "Şirket sahipliği ve kara para aklama araştırmaları için kurumsal veriler sunar." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Available Data Providers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {databases.map((db, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">{db.name}</h2>
            <p className="text-gray-700">{db.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
