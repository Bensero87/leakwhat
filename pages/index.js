
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#001f3f', minHeight: '100vh', color: 'white', padding: '2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray', paddingBottom: '1rem' }}>
        <div style={{ fontWeight: 'bold' }}>LeakWhat</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Home</Link>
          <Link href="/databases">Databases</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </nav>

      <h1 style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
        Make sure your credentials haven't been compromised
      </h1>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ backgroundColor: '#444', padding: '1rem', flex: 1, color: 'white', borderRadius: '0.5rem' }}>
          <h2>Email Lookup</h2>
          <p>$5</p>
          <Link href="/email-lookup"><button style={{ marginTop: '1rem' }}>Choose this</button></Link>
        </div>
        <div style={{ backgroundColor: '#444', padding: '1rem', flex: 1, color: 'white', borderRadius: '0.5rem' }}>
          <h2>Phone Lookup</h2>
          <p>$5</p>
          <Link href="/phone-lookup"><button style={{ marginTop: '1rem' }}>Choose this</button></Link>
        </div>
        <div style={{ backgroundColor: '#444', padding: '1rem', flex: 1, color: 'white', borderRadius: '0.5rem' }}>
          <h2>Email + Phone Lookup</h2>
          <p>$9</p>
          <Link href="/email-phone-lookup"><button style={{ marginTop: '1rem' }}>Choose this</button></Link>
        </div>
      </div>

      <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#333', padding: '1rem', borderRadius: '0.5rem', maxWidth: '1000px', textAlign: 'left' }}>
          <h3 style={{ fontWeight: 'bold' }}>Protecting Yourself</h3>
          <p>Find out if your data has been compromised as a result of any breach.</p>
          <h3 style={{ fontWeight: 'bold' }}>Password Leakage</h3>
          <p>Find out if your password algorithm has been compromised as a result of any breach.</p>
          <h3 style={{ fontWeight: 'bold' }}>Detecting Password Leakage</h3>
          <p>Find out if you need to change your password.</p>
        </div>
      </div>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid gray', paddingTop: '1rem' }}>
        <p>Contact: leakwhat@leakwhat.com</p>
      </footer>
    </div>
  );
}
