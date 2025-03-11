"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface PaymentStepProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  sameAsBilling: boolean;
  setSameAsBilling: (value: boolean) => void;
  onBack: () => void;
}

export function PaymentStep({
  paymentMethod,
  setPaymentMethod,
  sameAsBilling,
  setSameAsBilling,
  onBack,
}: PaymentStepProps) {
  const handleTabChange = (value: string) => {
    setPaymentMethod(value);
  };

  // For desktop view, we'll show the order summary
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if we're on desktop on component mount
  useState(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="py-4">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        {isDesktop && (
          <div>
            <h2 className="mb-6 text-2xl font-bold">Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-12 w-12 rounded-md bg-gray-200"></div>
                  <span>Apple iPhone 14 Pro Max 128Gb</span>
                </div>
                <span className="font-bold">$1399</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-12 w-12 rounded-md bg-gray-200"></div>
                  <span>AirPods Max Silver</span>
                </div>
                <span className="font-bold">$549</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-12 w-12 rounded-md bg-gray-200"></div>
                  <span>Apple Watch Series 9 GPS 41mm</span>
                </div>
                <span className="font-bold">$399</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="text-sm">
                <p className="font-medium">Address</p>
                <p className="text-gray-600">
                  1131 Dusty Townline, Jacksonville, TX 40322
                </p>
              </div>

              <div className="text-sm">
                <p className="font-medium">Shipment method</p>
                <p className="text-gray-600">Free</p>
              </div>

              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold">$2347</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span>Estimated Tax</span>
                  <span>$50</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span>Estimated shipping & Handling</span>
                  <span>$29</span>
                </div>
                <div className="mt-4 flex justify-between border-t pt-4">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">$2426</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <h2 className="mb-6 text-2xl font-bold">Payment</h2>

          <Tabs
            defaultValue="credit-card"
            value={paymentMethod}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
              <TabsTrigger value="paypal">PayPal</TabsTrigger>
            </TabsList>

            <TabsContent value="credit-card">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg bg-black p-6 text-white">
                  <div className="absolute top-0 left-0 h-full w-full">
                    <div className="absolute -top-10 -right-10 h-32 w-96 rotate-45 transform bg-gray-800"></div>
                    <div className="absolute -bottom-10 -left-10 h-32 w-96 rotate-45 transform bg-gray-800"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center">
                      <div className="mr-2 h-6 w-10 rounded bg-yellow-500"></div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white">
                        <span className="text-xs">{">"}</span>
                      </div>
                    </div>

                    <div className="mb-6 font-mono text-xl tracking-widest">
                      4085 9536 8475 9530
                    </div>

                    <div className="text-sm">Cardholder</div>
                  </div>

                  <div className="absolute right-4 bottom-4 flex">
                    <div className="h-8 w-8 rounded-full bg-red-500 opacity-80"></div>
                    <div className="-ml-4 h-8 w-8 rounded-full bg-yellow-500 opacity-80"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardholderName">Cardholder Name</Label>
                    <Input id="cardholderName" placeholder="Cardholder Name" />
                  </div>

                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="Card Number" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expDate">Exp.Date</Label>
                      <Input id="expDate" placeholder="Exp.Date" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="CVV" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sameAsBilling"
                      checked={sameAsBilling}
                      onCheckedChange={(checked) =>
                        setSameAsBilling(checked as boolean)
                      }
                    />
                    <label
                      htmlFor="sameAsBilling"
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Same as billing address
                    </label>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="paypal">
              <div className="flex h-64 items-center justify-center rounded-lg border">
                <p className="text-gray-500">
                  PayPal payment option will be available soon
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-end space-x-4">
            <Button variant="outline" onClick={onBack} className="w-32">
              Back
            </Button>
            <Button className="w-32 bg-black text-white hover:bg-gray-800">
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
