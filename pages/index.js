
export default function Home() {
  return (
    <div style={{ backgroundColor: '#001F3F', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '10px', borderBottom: '2px solid white' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Databases</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>FAQ</a>
      </nav>
      <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px' }}>Make sure your credentials haven't been compromised</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
        <div style={{ padding: '20px', background: 'gray', color: 'white', borderRadius: '10px' }}>
          <h3>Email Lookup</h3>
          <p>Check if your email has been compromised.</p>
          <p><strong>$5</strong></p>
          <button style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Choose this</button>
        </div>
        <div style={{ padding: '20px', background: 'gray', color: 'white', borderRadius: '10px' }}>
          <h3>Phone Lookup</h3>
          <p>Check if your phone number has been compromised.</p>
          <p><strong>$5</strong></p>
          <button style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Choose this</button>
        </div>
        <div style={{ padding: '20px', background: 'gray', color: 'white', borderRadius: '10px' }}>
          <h3>Email + Phone Lookup</h3>
          <p>Check if both your email and phone number have been compromised.</p>
          <p><strong>$9</strong></p>
          <button style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Choose this</button>
        </div>
      </div>
      <div style={{ marginTop: '50px', padding: '20px', background: '#002F5F', color: 'white' }}>
        <h2>Use Cases</h2>
        <p><strong>Protecting yourself:</strong> Find out if your data has been compromised as a result of any breach.</p>
        <p><strong>Password Leakage:</strong> Find out if your password algorithm has been compromised as a result of any breach.</p>
        <p><strong>Protect Yourself:</strong> Find out if you need to change your password.</p>
      </div>
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h3>Contacts</h3>
        <p>Email: <a href="mailto:leakwhat@leakwhat.com" style={{ color: 'white' }}>leakwhat@leakwhat.com</a></p>
      </div>
    </div>
  );
}
