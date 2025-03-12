
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
    </div>
  );
}
