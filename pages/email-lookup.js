
import Link from 'next/link';

export default function EmailLookup() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>E-mail Lookup</h1>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', background: '#f8f8f8', borderRadius: '10px' }}>
        <p>Enter your e-mail to check if it has been compromised.</p>
        <input type="email" placeholder="Your e-mail" style={{ padding: '10px', width: '100%', marginBottom: '10px' }} />
        <p>
          <input type="checkbox" /> I accept the <Link href="/privacy-notice"><a style={{ color: 'blue' }}>Privacy Notice</a></Link>
        </p>
        <button style={{ padding: '10px', background: 'blue', color: 'white', width: '100%', marginTop: '10px' }}>
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
