"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import Address from "./address";
import { useState } from "react";
import type { Address as AddressType } from "@/types/address";
import { AddressFormDialog } from "./address-form-dialog";

interface AddressStepProps {
  selectedAddress: string;
  setSelectedAddress: (address: string) => void;
  onNext: () => void;
}

const initialAddresses: AddressType[] = [
  {
    id: "home",
    label: "2118 Thornridge",
    type: "HOME",
    address: "2118 Thornridge Cir.",
    city: "Syracuse",
    state: "Connecticut",
    zipCode: "35624",
    phone: "(209) 555-0104",
  },
  {
    id: "office",
    label: "Headoffice",
    type: "OFFICE",
    address: "2715 Ash Dr. San Jose,",
    city: "South Dakota",
    state: "SD",
    zipCode: "83475",
    phone: "(704) 555-0127",
  },
];

export function AddressStep({
  selectedAddress,
  setSelectedAddress,
  onNext,
}: AddressStepProps) {
  const [addresses, setAddresses] = useState<AddressType[]>(initialAddresses);

  const handleDelete = (deleteId: string) => {
    if (deleteId) {
      setAddresses(addresses.filter((address) => address.id !== deleteId));

      // If the deleted address was selected, select the first available address
      if (deleteId === selectedAddress && addresses.length > 1) {
        const remainingAddresses = addresses.filter(
          (addr) => addr.id !== deleteId,
        );
        if (remainingAddresses.length > 0) {
          setSelectedAddress(remainingAddresses[0].id);
        }
      }
    }
  };

  const handleEdit = (editId: string, updatedAddress: AddressType) => {
    setAddresses(
      addresses.map((addr) =>
        addr.id === editId ? { ...updatedAddress } : addr,
      ),
    );
  };

  const handleAddAddress = (newAddress: AddressType) => {
    setAddresses([...addresses, newAddress]);

    // Optionally select the newly added address
    setSelectedAddress(newAddress.id);
  };

  return (
    <div className="py-4">
      <h2 className="mb-6 text-2xl font-bold">Select Address</h2>

      {/* group of addresses */}
      <RadioGroup
        value={selectedAddress}
        onValueChange={setSelectedAddress}
        className="space-y-4"
      >
        {addresses.map((address) => (
          <Address
            key={address.id}
            {...address}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </RadioGroup>

      {/* button to add new address */}
      <div className="mt-8 flex justify-center border-t border-dashed pt-8">
        <AddressFormDialog
          onSave={handleAddAddress}
          trigger={
            <Button className=" bg-black text-white hover:bg-gray-800 flex items-center text-sm font-medium">
              <Plus className="mr-2 h-4 w-4" /> Add New Address
            </Button>
          }
        />
      </div>

      {/* back and next button */}
      <div className="mt-8 flex justify-end space-x-4">
        <Button variant="outline" className="w-32">
          Back
        </Button>
        <Button
          onClick={onNext}
          className="w-32 bg-black text-white hover:bg-gray-800"
          disabled={addresses.length === 0}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
