
export default function FAQ() {
  return (
    <div style={{ backgroundColor: '#001F3F', color: 'white', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions (FAQ)</h1>
      <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.6', fontSize: '16px' }}>
        
        <h3>What is LeakWhat?</h3>
        <p>LeakWhat is a platform that allows you to check whether your e-mail address or phone number has appeared in publicly available data breaches.</p>

        <h3>What kind of data do you provide?</h3>
        <p>We only provide information about the presence of your e-mail address or phone number in leaked datasets. We do not disclose passwords or sensitive personal data.</p>

        <h3>How does it work?</h3>
        <p>You enter your e-mail address or phone number, and we check our database to see if it has been found in any known leaks. If a match is found, we prepare a report and send it to you.</p>

        <h3>Is it legal to use this service?</h3>
        <p>Yes. All searches are performed with your explicit consent, and only on the data you provide. The platform is fully compliant with KVKK, GDPR, and other applicable privacy laws.</p>

        <h3>Do you store my data?</h3>
        <p>No. We do not store, retain, or reuse your data. Your input is used once for the search and then deleted immediately.</p>

        <h3>Will I get a full copy of the leak?</h3>
        <p>No. We do not share full leak datasets or password hashes. You will only be informed whether your data was found or not, and in which type of breach (e.g. marketing database, forum dump).</p>

        <h3>How long does it take to get results?</h3>
        <p>Once your request is received and confirmed, the report is usually delivered within a few hours to your e-mail address.</p>

        <h3>Can someone else check my data?</h3>
        <p>No. Only the person who provides their own data and consents to the processing may perform a lookup. This ensures privacy and legal compliance.</p>

        <h3>Who can I contact for support?</h3>
        <p>You can contact us at <a href="mailto:leakwhat@leakwhat.com" style={{ color: 'lightblue' }}>leakwhat@leakwhat.com</a>.</p>
      </div>
    </div>
  );
}
