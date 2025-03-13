
import Link from 'next/link';
import { useState } from 'react';

export default function EmailLookup() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ backgroundColor: '#001F3F', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Email Lookup</h1>
      <input type="text" placeholder="Enter your email" style={{ padding: '10px', width: '80%' }} />
      <p>
        <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} /> 
        I accept the <Link href="/privacy-notice"><a style={{ color: 'lightblue' }}>Privacy Notice</a></Link>
      </p>
      <button disabled={!checked} style={{ padding: '10px', background: checked ? 'blue' : 'gray', color: 'white' }}>Continue to Payment</button>
    </div>
  );
}
