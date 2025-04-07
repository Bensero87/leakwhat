import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: '#001F3F', minHeight: '100vh', color: 'white', fontFamily: 'Arial' }}>
      {/* Menü */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', padding: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="/databases" style={{ color: 'white', textDecoration: 'none' }}>Databases</a>
        <a href="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</a>
      </div>

      <hr style={{ width: '80%', margin: '0 auto', borderColor: '#ccc' }} />

      {/* Başlık */}
      <h1 style={{ textAlign: 'center', marginTop: '40px', fontSize: '26px', fontWeight: 'bold' }}>
        Make sure your credentials haven't been compromised!
      </h1>

      {/* Ürün Kartları */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '50px', flexWrap: 'wrap' }}>
        {/* Email Lookup */}
        <div style={{ backgroundColor: '#4a4a4a', padding: '30px', borderRadius: '16px', width: '250px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '10px' }}>E-mail Lookup</h2>
          <p style={{ color: 'white', fontSize: '16px', marginBottom: '20px' }}>$5</p>
          <button
            onClick={() => router.push('/email-lookup')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#888',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Choose this
          </button>
        </div>

        {/* Phone Lookup */}
        <div style={{ backgroundColor: '#4a4a4a', padding: '30px', borderRadius: '16px', width: '250px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '10px' }}>Phone Lookup</h2>
          <p style={{ color: 'white', fontSize: '16px', marginBottom: '20px' }}>$5</p>
          <button
            onClick={() => router.push('/phone-lookup')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#888',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Choose this
          </button>
        </div>

        {/* E-mail + Phone Lookup */}
        <div style={{ backgroundColor: '#4a4a4a', padding: '30px', borderRadius: '16px', width: '250px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '10px' }}>E-mail + Phone Lookup</h2>
          <p style={{ color: 'white', fontSize: '16px', marginBottom: '20px' }}>$9</p>
          <button
            onClick={() => router.push('/email-phone-lookup')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#888',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Choose this
          </button>
        </div>
      </div>

      {/* Use Cases */}
      <h2 style={{ textAlign: 'center', fontSize: '22px', marginTop: '60px' }}>Use Cases</h2>
      <div style={{ width: '80%', margin: '30px auto 60px auto', fontSize: '18px', lineHeight: '1.8', textAlign: 'center' }}>
        <p><strong>Protecting Yourself:</strong> Find out if your data has been compromised as a result of any breach.</p>
        <p><strong>Password Leakage:</strong> Find out if your password algorithm has been compromised as a result of any breach.</p>
        <p><strong>Detecting Password Leakage:</strong> Find out if you need to change your password.</p>
      </div>

      {/* Contacts */}
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginBottom: '40px' }}>
        Contacts: leakwhat@leakwhat.com
      </div>
    </div>
  );
}
