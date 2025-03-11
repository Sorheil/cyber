"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ShippingStepProps {
  shippingMethod: string;
  setShippingMethod: (method: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export function ShippingStep({
  shippingMethod,
  setShippingMethod,
  onBack,
  onNext,
}: ShippingStepProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="py-4">
      <h2 className="mb-6 text-2xl font-bold">Shipment Method</h2>

      <RadioGroup
        value={shippingMethod}
        onValueChange={(value) => {
          setShippingMethod(value);
          // Reset date if not using schedule
          if (value !== "schedule") {
            setDate(undefined);
          }
        }}
        className="space-y-4"
      >
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <RadioGroupItem value="free" id="free" />
              <div className="ml-3">
                <Label htmlFor="free" className="font-medium">
                  Free
                </Label>
                <p className="text-sm text-gray-500">Regulary shipment</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">17 Oct, 2023</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <RadioGroupItem value="express" id="express" />
              <div className="ml-3">
                <Label htmlFor="express" className="font-medium">
                  $8.50
                </Label>
                <p className="text-sm text-gray-500">
                  Get your delivery as soon as possible
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">1 Oct, 2023</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <RadioGroupItem value="schedule" id="schedule" />
              <div className="ml-3">
                <Label htmlFor="schedule" className="font-medium">
                  Schedule
                </Label>
                <p className="text-sm text-gray-500">
                  Pick a date when you want to get your delivery
                </p>
              </div>
            </div>
            <div className="text-right">
              <Popover
                open={shippingMethod === "schedule" && isCalendarOpen}
                onOpenChange={setIsCalendarOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center text-sm font-medium",
                      !date && "text-muted-foreground",
                    )}
                    onClick={() => {
                      if (shippingMethod === "schedule") {
                        setIsCalendarOpen(!isCalendarOpen);
                      } else {
                        setShippingMethod("schedule");
                        setIsCalendarOpen(true);
                      }
                    }}
                  >
                    {date ? format(date, "PPP") : "Select Date"}
                    {isCalendarOpen ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto bg-white p-0" align="end">
                  {/* <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => {
                      setDate(newDate);
                      setIsCalendarOpen(false);
                    }}
                    initialFocus
                    disabled={(date) => {
                      // Disable dates in the past
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today;
                    }}
                  /> */}
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </RadioGroup>

      <div className="mt-8 flex justify-end space-x-4">
        <Button variant="outline" onClick={onBack} className="w-32">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={shippingMethod === "schedule" && !date}
          className="w-32 bg-black text-white hover:bg-gray-800"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
