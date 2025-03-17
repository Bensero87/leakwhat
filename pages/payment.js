
import Link from 'next/link';
import { useState } from 'react';

export default function Payment() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Payment Page</h1>
      
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', background: '#f8f8f8', borderRadius: '10px' }}>
        <p>Enter your card details to proceed with the payment.</p>
        <input type="text" placeholder="Card Number" style={{ padding: '10px', width: '100%', marginBottom: '10px' }} />
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" placeholder="MM/YY" style={{ padding: '10px', width: '50%' }} />
          <input type="text" placeholder="CVV" style={{ padding: '10px', width: '50%' }} />
        </div>
        <p>
          <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} /> 
          I have read and accept the <Link href="/privacy-notice"><a style={{ color: 'blue' }}>General Privacy Notice</a></Link>
        </p>
        <button disabled={!checked} style={{ padding: '10px', background: checked ? 'blue' : 'gray', color: 'white', width: '100%', marginTop: '10px' }}>
          Pay Now
        </button>
      </div>
    </div>
  );
}
