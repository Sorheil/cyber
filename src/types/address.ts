export interface Address {
  id: string;
  label: string;
  type: "HOME" | "OFFICE" | "OTHER";
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}
