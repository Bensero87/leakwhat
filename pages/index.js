export default function Home() {
  return (
    <div style={{ backgroundColor: "#001F3F", minHeight: "100vh", color: "white", fontFamily: "Arial, sans-serif" }}>
      {/* Üst Menü */}
      <header style={{ padding: "20px 0", textAlign: "center", borderBottom: "1px solid #ccc" }}>
        <nav style={{ display: "flex", justifyContent: "center", gap: "60px", fontWeight: "bold", fontSize: "18px" }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/databases" style={{ color: "white", textDecoration: "none" }}>Databases</a>
          <a href="/faq" style={{ color: "white", textDecoration: "none" }}>FAQ</a>
        </nav>
      </header>

      {/* Başlık */}
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "40px 0" }}>
        Make sure your credentials haven't been compromised!
      </h1>

      {/* Hizmet Kartları */}
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", maxWidth: "1000px", margin: "0 auto" }}>
        {[
          { title: "E-mail Lookup", price: "$5", link: "/email-lookup" },
          { title: "Phone Lookup", price: "$5", link: "/phone-lookup" },
          { title: "E-mail + Phone Lookup", price: "$9", link: "/email-phone-lookup" },
        ].map((item, index) => (
          <div key={index} style={{
            backgroundColor: "#666", color: "white",
            borderRadius: "10px", padding: "30px", width: "260px", textAlign: "center", boxShadow: "0 0 10px rgba(0,0,0,0.2)"
          }}>
            <h2>{item.title}</h2>
            <p style={{ fontSize: "24px", margin: "10px 0" }}>{item.price}</p>
            <a href={item.link} style={{
              backgroundColor: "#001F3F", color: "white", padding: "10px 20px",
              borderRadius: "5px", textDecoration: "none", fontWeight: "bold", display: "inline-block", marginTop: "15px"
            }}>
              Choose this
            </a>
          </div>
        ))}
      </div>

      {/* Use Cases Başlığı */}
      <h2 style={{ textAlign: "center", marginTop: "80px", fontSize: "26px" }}>Use Cases</h2>

      {/* Use Cases Açıklamaları */}
      <div style={{
        margin: "30px auto 60px",
        maxWidth: "800px",
        padding: "0 20px",
        fontSize: "20px",
        lineHeight: "1.6"
      }}>
        <p style={{ marginBottom: "20px" }}>
          <strong>Protecting Yourself:</strong> Find out if your data has been compromised as a result
          of any breach.
        </p>
        <p style={{ marginBottom: "20px" }}>
          <strong>Password Leakage:</strong> Find out if your password algorithm has been compromised
          as a result of any breach.
        </p>
        <p>
          <strong>Detecting Password Leakage:</strong> Find out if you need to change your password.
        </p>
      </div>

      {/* Contacts */}
      <footer style={{ textAlign: "center", padding: "40px 0", fontSize: "20px", fontWeight: "bold" }}>
        Contacts: leakwhat@leakwhat.com
      </footer>
    </div>
  );
}
