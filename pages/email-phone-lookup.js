
export default function EmailPhoneLookup() {
  return (
    <div style={{ backgroundColor: '#001F3F', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Email + Phone Lookup</h1>
      <input type="text" placeholder="Enter your email" style={{ padding: '10px', width: '80%', marginBottom: '10px' }} />
      <input type="text" placeholder="Enter your phone number" style={{ padding: '10px', width: '80%' }} />
      <p>
        <input type="checkbox" /> I accept the KVKK & GDPR Privacy Notice
      </p>
      <button style={{ padding: '10px', background: 'blue', color: 'white' }}>Continue to Payment</button>
    </div>
  );
}
