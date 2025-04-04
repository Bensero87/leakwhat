
export default function PrivacyNotice() {
  return (
    <div style={{ backgroundColor: '#001F3F', color: 'white', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Privacy Notice</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontSize: '16px' }}>
        <p><strong>Effective Date:</strong> 2025-04-04</p>
        <p><strong>Last Updated:</strong> 2025-04-04</p>
        
        <h2>1. Introduction</h2>
        <p>
          At LeakWhat, we are committed to protecting your personal data in accordance with the applicable laws of the Republic of Türkiye,
          including the Law on the Protection of Personal Data No. 6698 ("KVKK"), the General Data Protection Regulation ("GDPR"),
          and applicable state-level data privacy laws in the United States, including the California Consumer Privacy Act (CCPA).
        </p>

        <h2>2. What Data We Collect</h2>
        <p>Depending on the service you select, we may collect:</p>
        <ul>
          <li>Your e-mail address,</li>
          <li>Your mobile phone number,</li>
          <li>The date and time of your inquiry.</li>
        </ul>
        <p>We do <strong>not</strong> collect your name, surname, or date of birth.</p>

        <h2>3. Purpose of Data Processing</h2>
        <p>Your data is used exclusively for the following purposes:</p>
        <ul>
          <li>To perform the data breach lookup service that you explicitly requested,</li>
          <li>To prepare and deliver a report showing whether your information has been found in publicly available leak sources,</li>
          <li>To contact you solely for delivering your report or responding to your inquiry.</li>
        </ul>

        <h2>4. Legal Basis for Processing</h2>
        <p>
          Your data is processed only with your explicit and informed consent, in accordance with Article 5/1 of the KVKK,
          Article 6/1(a) of the GDPR, and applicable state-level data privacy laws in the United States,
          including the California Consumer Privacy Act (CCPA).
        </p>

        <h2>5. Data Storage and Retention</h2>
        <p>
          LeakWhat does <strong>not store, archive, or reuse</strong> your personal data.
          All data is used <strong>only once</strong>, for the lookup report preparation, and is <strong>automatically deleted immediately</strong> after the process is completed.
        </p>

        <h2>6. Data Sharing and Transfers</h2>
        <p>
          Your personal data is <strong>not shared</strong> with any third party, institution, government authority, or business partner.
          There is <strong>no cross-border transfer</strong> of your data.
        </p>

        <h2>7. Security Measures</h2>
        <p>
          We use up-to-date technical and organizational security measures to protect your data against unauthorized access, disclosure,
          alteration, or destruction.
        </p>

        <h2>8. Cookies and Tracking</h2>
        <p>
          LeakWhat does <strong>not use cookies</strong> for tracking or behavioral profiling.
          We may use strictly necessary technical cookies for system functionality (e.g., session validation).
        </p>

        <h2>9. Your Rights</h2>
        <p>Under KVKK and GDPR, you have the following rights:</p>
        <ul>
          <li>To learn whether your data is processed,</li>
          <li>To request a copy of your processed data,</li>
          <li>To request correction or deletion,</li>
          <li>To object to unlawful processing,</li>
          <li>To withdraw your consent at any time.</li>
        </ul>
        <p>You can exercise these rights by sending an e-mail to <strong>leakwhat@leakwhat.com</strong>.</p>

        <h2>10. Contact</h2>
        <p>If you have questions about this Privacy Notice or wish to exercise your rights, you can contact:</p>
        <p><strong>LeakWhat Data Privacy Team</strong><br/>
        📧 Email: <a href="mailto:leakwhat@leakwhat.com" style={{ color: 'lightblue' }}>leakwhat@leakwhat.com</a></p>

        <h2>11. Updates</h2>
        <p>
          We may update this Privacy Notice from time to time to reflect legal or operational changes.
          The latest version will always be accessible via our website.
        </p>
      </div>
    </div>
  );
}
