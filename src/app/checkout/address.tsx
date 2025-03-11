"use client";

import { useState } from "react";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Pencil, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Address as AddressType } from "@/types/address";
import { AddressFormDialog } from "./address-form-dialog";

interface AddressProps extends AddressType {
  onDelete: (deleteId: string) => void;
  onEdit: (editId: string, updatedAddress: AddressType) => void;
}

export default function Address({
  id,
  label,
  type,
  address,
  city,
  state,
  zipCode,
  phone,
  onDelete,
  onEdit,
}: AddressProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const currentAddress: AddressType = {
    id,
    label,
    type,
    address,
    city,
    state,
    zipCode,
    phone,
  };

  const handleSaveEdit = (updatedAddress: AddressType) => {
    onEdit(id, updatedAddress);
  };

  return (
    <div className={`rounded-lg bg-gray-100 p-4`}>
      <div className="flex items-start">
        <RadioGroupItem value={id} id={id} className="mt-1" />
        <div className="ml-3 flex-1">
          <div className="flex items-center justify-between">
            <Label htmlFor={id} className="text-base font-medium">
              {label}
            </Label>
            <span className="rounded bg-black px-2 py-0.5 text-xs font-medium text-white">
              {type}
            </span>
          </div>
          <div className="mt-1 text-sm">
            <p>{address}</p>
            <p>
              {city}, {state} {zipCode}
            </p>
            <p className="mt-1">{phone}</p>
          </div>
        </div>
        <div className="ml-4 flex space-x-2">
          <AddressFormDialog
            editAddress={currentAddress}
            onSave={handleSaveEdit}
            trigger={
              <button className="text-gray-500">
                <Pencil className="h-4 w-4" />
              </button>
            }
          />

          <Dialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <DialogTrigger asChild>
              <button className="text-gray-500">
                <X className="h-4 w-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="rounded-lg bg-white p-6 shadow-lg">
              <DialogHeader>
                <DialogTitle>
                  Êtes-vous sûr de vouloir supprimer cette adresse ?
                </DialogTitle>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Annuler
                  </Button>
                </DialogClose>
                <Button
                  type="button"
                  variant={"destructive"}
                  onClick={() => {
                    onDelete(id);
                    setIsDeleteDialogOpen(false);
                  }}
                  className="bg-red-500 text-white hover:bg-red-600 focus:ring-black"
                >
                  Supprimer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
