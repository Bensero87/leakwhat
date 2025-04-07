import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function EmailLookup() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0c1e40] text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">E-mail Lookup</h1>
      <input type="email" placeholder="Enter your e-mail" className="mb-4 p-2 rounded text-black" />
      <div className="flex items-center mb-4">
        <input type="checkbox" id="privacy" className="mr-2" />
        <label htmlFor="privacy">I accept the <a href="/privacy-notice" className="underline">Privacy Notice</a></label>
      </div>
      <Button onClick={() => router.push("/payment")}>Continue to Payment</Button>
    </div>
  );
}