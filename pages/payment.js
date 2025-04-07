import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#0c1e40] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 text-white">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Payment Page</h2>
          <p className="mb-4">Your selected service details go here.</p>
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox id="gdpr" />
            <label htmlFor="gdpr" className="text-sm">
              I have read and accept the <a href="/privacy-notice" className="underline">Privacy Notice</a>.
            </label>
          </div>
          <Button className="w-full bg-white text-black hover:bg-gray-300">Proceed to Payment</Button>
        </CardContent>
      </Card>
    </div>
  );
}