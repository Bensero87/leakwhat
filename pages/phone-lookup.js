import { useState } from "react";
import { useRouter } from "next/router";

export default function PhoneLookup() {
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (accepted && phone) {
      router.push("/payment");
    }
  };

  return (
    <div style={{ backgroundColor: "#001F3F", minHeight: "100vh", color: "white", padding: "50px 20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold" }}>Phone Lookup</h1>

      <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "8px",
            border: "none",
            marginBottom: "20px",
            fontSize: "16px"
          }}
        />

        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              style={{ marginRight: "10px" }}
            />
            I accept the <a href="/privacy-notice" style={{ color: "#ccc", textDecoration: "underline" }}>Privacy Notice</a>
          </label>
        </div>

        <button
          onClick={handleContinue}
          disabled={!accepted || !phone}
          style={{
            backgroundColor: "#888",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: accepted && phone ? "pointer" : "not-allowed"
          }}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
