import React from 'react';

export default function Payment() {
  return (
    <div style={{ backgroundColor: '#001F3F', minHeight: '100vh', color: 'white', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Secure Payment</h1>
      
      <div style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Card Number"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            color: '#000'
          }}
        />
        <input
          type="text"
          placeholder="MM"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            color: '#000'
          }}
        />
        <input
          type="text"
          placeholder="YY"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            color: '#000'
          }}
        />
        <input
          type="text"
          placeholder="CVV"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            color: '#000'
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" style={{ marginLeft: '0.5rem' }}>
            I have read and accept the <a href="/privacy-notice" style={{ color: '#00BFFF' }}>Privacy Notice</a>.
          </label>
        </div>

        <button
          style={{
            marginTop: '1rem',
            padding: '14px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#00BFFF',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
}
