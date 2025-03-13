
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#001F3F', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '10px', borderBottom: '2px solid white' }}>
        <Link href="/"><a style={{ color: 'white', textDecoration: 'none' }}>Home</a></Link>
        <Link href="/databases"><a style={{ color: 'white', textDecoration: 'none' }}>Databases</a></Link>
        <Link href="/faq"><a style={{ color: 'white', textDecoration: 'none' }}>FAQ</a></Link>
      </nav>
      <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px' }}>Make sure your credentials haven't been compromised</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
        <Link href="/email-lookup">
          <div style={{ padding: '20px', background: 'gray', color: 'white', borderRadius: '10px', cursor: 'pointer' }}>
            <h3>E-mail Lookup</h3>
            <p>Check if your e-mail has been compromised.</p>
            <p><strong>$5</strong></p>
            <button style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Choose this</button>
          </div>
        </Link>
        <Link href="/phone-lookup">
          <div style={{ padding: '20px', background: 'gray', color: 'white', borderRadius: '10px', cursor: 'pointer' }}>
            <h3>Phone Lookup</h3>
            <p>Check if your phone number has been compromised.</p>
            <p><strong>$5</strong></p>
            <button style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Choose this</button>
          </div>
        </Link>
        <Link href="/email-phone-lookup">
          <div style={{ padding: '20px', background: 'gray', color: 'white', borderRadius: '10px', cursor: 'pointer' }}>
            <h3>E-mail + Phone Lookup</h3>
            <p>Check if both your e-mail and phone number have been compromised.</p>
            <p><strong>$9</strong></p>
            <button style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Choose this</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
