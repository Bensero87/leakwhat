
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function PaymentPage() {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accepted) {
      alert("Payment system will be activated soon.");
    } else {
      alert("Please accept the Privacy Notice before proceeding.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B1A2F] text-white p-4">
      <Card className="w-full max-w-md bg-[#1F2A40] text-white">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Payment</h2>
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Card Number" className="mb-4 text-black" required />
            <div className="flex gap-2 mb-4">
              <Input type="text" placeholder="MM" className="text-black" required />
              <Input type="text" placeholder="YY" className="text-black" required />
              <Input type="text" placeholder="CVV" className="text-black" required />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox id="accept" checked={accepted} onCheckedChange={setAccepted} />
              <label htmlFor="accept" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I have read and accept the <Link href="/privacy-notice" className="underline">Privacy Notice</Link>
              </label>
            </div>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
              Proceed to Payment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
