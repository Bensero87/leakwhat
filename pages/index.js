import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
        <h1 className="text-xl font-bold">LeakWhat</h1>
        <nav className="space-x-4">
          <Link href="/">
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <Link href="/databases">
            <span className="hover:underline cursor-pointer">Databases</span>
          </Link>
          <Link href="/faq">
            <span className="hover:underline cursor-pointer">FAQ</span>
          </Link>
        </nav>
      </header>

      {/* Tagline */}
      <section className="text-center mt-8">
        <h2 className="text-2xl font-bold text-white">
          Make sure your credentials haven't been compromised
        </h2>
      </section>

      {/* Services */}
      <section className="flex flex-col md:flex-row justify-center gap-6 px-6 mt-12">
        {[
          { title: "E-mail Lookup", price: "$5", link: "/email-lookup" },
          { title: "Phone Lookup", price: "$5", link: "/phone-lookup" },
          { title: "E-mail + Phone Lookup", price: "$9", link: "/email-phone-lookup" },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-gray-700 rounded-lg p-6 w-full md:w-80 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-lg text-white">{service.price}</p>
            </div>
            <Link href={service.link}>
              <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded">
                Choose this
              </button>
            </Link>
          </div>
        ))}
      </section>

      {/* Use Cases */}
      <section className="flex flex-col items-center mt-16 mb-20 px-6">
        <div className="bg-gray-700 p-6 rounded-2xl w-full md:w-[800px]">
          <h3 className="text-xl font-bold text-center mb-4">Use Cases</h3>
          <ul className="space-y-2 text-white">
            <li>
              <strong>Protecting Yourself:</strong> Find out if your data has been compromised as a result of any breach.
            </li>
            <li>
              <strong>Password Leakage:</strong> Find out if your password algorithm has been compromised as a result of any breach.
            </li>
            <li>
              <strong>Detecting Password Leakage:</strong> Find out if you need to change your password.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-600">
        <p>Contact: <a href="mailto:leakwhat@leakwhat.com" className="underline">leakwhat@leakwhat.com</a></p>
      </footer>
    </div>
  );
}
