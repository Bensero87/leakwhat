import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a23', minHeight: '100vh', padding: '2rem', color: 'white' }}>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #444', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 'bold', fontSize: '24px' }}>LeakWhat</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/">Home</Link>
          <Link href="/databases">Databases</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </nav>

      {/* Slogan */}
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
        Make sure your credentials haven't been compromised
      </h1>

      {/* Services */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
        {[
          { title: 'E-mail Lookup', price: '$5', link: '/email-lookup' },
          { title: 'Phone Lookup', price: '$5', link: '/phone-lookup' },
          { title: 'E-mail + Phone Lookup', price: '$9', link: '/email-phone-lookup' }
        ].map(({ title, price, link }) => (
          <div key={title} style={{ backgroundColor: '#444', padding: '2rem', borderRadius: '16px', width: '260px', textAlign: 'center' }}>
            <h2>{title}</h2>
            <p style={{ fontSize: '24px', margin: '1rem 0' }}>{price}</p>
            <Link href={link}>
              <button style={{
                backgroundColor: '#222',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                Choose this
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Use Case */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
        <div style={{ backgroundColor: '#333', padding: '2rem', borderRadius: '16px', maxWidth: '800px', width: '100%' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Use Cases</h3>
          <ul>
            <li><strong>Protecting Yourself:</strong> Find out if your data has been compromised as a result of any breach.</li>
            <li><strong>Password Leakage:</strong> Find out if your password algorithm has been compromised as a result of any breach.</li>
            <li><strong>Detecting Password Leakage:</strong> Find out if you need to change your password.</li>
          </ul>
        </div>
      </div>

      {/* Contacts */}
      <footer style={{ borderTop: '1px solid #444', paddingTop: '2rem', textAlign: 'center' }}>
        <p>Contact us: <a href="mailto:leakwhat@leakwhat.com" style={{ color: '#fff' }}>leakwhat@leakwhat.com</a></p>
      </footer>
    </div>
  );
}
