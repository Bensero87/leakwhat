
import React from "react";

export default function PaymentPage() {
  return (
    <div style={{ backgroundColor: '#0a0f3d', minHeight: '100vh', color: 'white', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Payment</h1>
      <form style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input type="text" placeholder="Card Number" style={inputStyle} /><br />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input type="text" placeholder="MM" style={{ ...inputStyle, flex: 1 }} />
          <input type="text" placeholder="YY" style={{ ...inputStyle, flex: 1 }} />
        </div><br />
        <input type="text" placeholder="CVV" style={inputStyle} /><br />
        <label style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
          <input type="checkbox" required style={{ marginRight: '0.5rem' }} />
          <a href="/privacy-notice" style={{ color: '#99ccff' }}>Genel Aydınlatma Metnini okudum ve kabul ediyorum.</a>
        </label>
        <button type="submit" style={{
          backgroundColor: '#3b82f6', padding: '0.75rem', width: '100%',
          border: 'none', borderRadius: '6px', color: 'white', fontSize: '1rem'
        }}>
          Ödeme Yap
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  border: 'none',
  borderRadius: '6px'
};
