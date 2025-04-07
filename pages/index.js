import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#001F3F", minHeight: "100vh", color: "white", padding: "2rem" }}>
      {/* Üst Menü */}
      <nav style={{ display: "flex", gap: "2rem", borderBottom: "1px solid white", paddingBottom: "1rem", fontSize: "18px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
        <Link href="/databases" style={{ textDecoration: "none", color: "white" }}>Databases</Link>
        <Link href="/faq" style={{ textDecoration: "none", color: "white" }}>FAQ</Link>
      </nav>

      {/* Başlık */}
      <h1 style={{ marginTop: "2rem", fontWeight: "bold", fontSize: "26px" }}>
        Make sure your credentials haven't been compromised
      </h1>

      {/* Hizmet Kutuları */}
      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
        {[
          { title: "E-mail Lookup", price: "$5", link: "/email-lookup" },
          { title: "Phone Lookup", price: "$5", link: "/phone-lookup" },
          { title: "E-mail + Phone Lookup", price: "$9", link: "/email-phone-lookup" }
        ].map((service, idx) => (
          <div key={idx} style={{
            backgroundColor: "#2e2e2e",
            color: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            width: "260px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <h2>{service.title}</h2>
            <p style={{ fontSize: "22px", margin: "1rem 0" }}>{service.price}</p>
            <Link href={service.link}>
              <button style={{
                backgroundColor: "#004080",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                cursor: "pointer"
              }}>
                Choose this
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Use Case Bölümü */}
      <div style={{
        marginTop: "4rem",
        padding: "2rem",
        backgroundColor: "#2e2e2e",
        borderRadius: "12px",
        width: "800px",
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "left"
      }}>
        <h2 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "1rem" }}>Use Cases</h2>
        <ul style={{ paddingLeft: "1rem" }}>
          <li><strong>Protecting Yourself:</strong> Find out if your data has been compromised as a result of any breach.</li>
          <li><strong>Password Leakage:</strong> Find out if your password algorithm has been compromised as a result of any breach.</li>
          <li><strong>Detecting Password Leakage:</strong> Find out if you need to change your password.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "4rem", borderTop: "1px solid white", paddingTop: "1rem", fontSize: "14px" }}>
        <p>Contacts: leakwhat@leakwhat.com</p>
      </footer>
    </div>
  );
}
