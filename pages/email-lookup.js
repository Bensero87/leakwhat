
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function EmailLookup() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <div style={{ backgroundColor: '#001F3F', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Email Lookup</h1>
      <input type="text" placeholder="Enter your email" style={{ padding: '10px', width: '80%' }} />
      <p>
        <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} /> 
        I accept the <Link href="/privacy-notice"><a style={{ color: 'lightblue' }}>Privacy Notice</a></Link>
      </p>
      <button 
        disabled={!checked} 
        onClick={() => router.push('/payment')} 
        style={{ padding: '10px', background: checked ? 'blue' : 'gray', color: 'white' }}>
        Continue to Payment
      </button>
    </div>
  );
}
