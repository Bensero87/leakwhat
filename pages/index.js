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
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "40px", margin: "40px auto", maxWidth: "900px" }}>
        {[
          { title: "E-mail Lookup", price: "$5", link: "/email-lookup" },
          { title: "Phone Lookup", price: "$5", link: "/phone-lookup" },
          { title: "E-mail + Phone Lookup", price: "$9", link: "/email-phone-lookup" },
        ].map((item, index) => (
          <div key={index} style={{
            backgroundColor: "#ccc", color: "white",
            borderRadius: "10px", padding: "30px", width: "250px", textAlign: "center", boxShadow: "0 0 10px rgba(0,0,0,0.2)"
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

      {/* Use Cases */}
      <div style={{ margin: "80px auto 60px", textAlign: "center", padding: "0 20px", maxWidth: "900px" }}>
        <p style={{ fontSize: "20px", marginBottom: "15px" }}>
          <strong>Protecting Yourself:</strong> Find out if your data has been compromised as a result of any breach.
        </p>
        <p style={{ fontSize: "20px", marginBottom: "15px" }}>
          <strong>Password Leakage:</strong> Find out if your password algorithm has been compromised as a result of any breach.
        </p>
        <p style={{ fontSize: "20px" }}>
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
