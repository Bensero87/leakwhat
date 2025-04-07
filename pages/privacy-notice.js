// pages/privacy-notice.js

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-[#0a0f24] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Notice</h1>

        <p className="mb-4">
          This Privacy Notice explains how LeakWhat ("we", "our", or "us")
          handles personal data in accordance with Turkish Personal Data
          Protection Law (KVKK), the General Data Protection Regulation (GDPR),
          and other relevant legislation.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Collection</h2>
        <p className="mb-4">
          We only collect the e-mail address or phone number you choose to
          provide to perform a lookup. No additional personal information is
          required or collected.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Purpose of Processing</h2>
        <p className="mb-4">
          The provided data is processed solely to check whether your
          credentials have been publicly exposed through known breaches.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">No Storage Policy</h2>
        <p className="mb-4">
          We do not store, share, or reuse the data you submit. Once the
          lookup is completed, your input is discarded immediately.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Legal Basis</h2>
        <p className="mb-4">
          Your data is processed only with your explicit and informed consent,
          in accordance with Article 5/1 of the KVKK, Article 6/1(a) of the GDPR,
          and relevant international best practices.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4">
          Under KVKK and GDPR, you have the right to access, rectify, erase,
          and restrict processing of your personal data. However, since we do
          not store any of your data, such rights do not apply in practice.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Responsibility</h2>
        <p className="mb-4">
          By submitting any data to this platform, you confirm that you are
          authorized to do so. LeakWhat shall not be held responsible for any
          misuse or unauthorized queries conducted through the service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-4">
          For questions about this notice, you can contact us at:
          <br />
          <a
            href="mailto:leakwhat@leakwhat.com"
            className="text-blue-400 underline"
          >
            leakwhat@leakwhat.com
          </a>
        </p>
      </div>
    </div>
  );
}
