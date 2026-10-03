import React from "react";

export interface AddressAutocompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: "origin" | "destination";
  value: string;
  onChange: (value: string) => void;
  onSelect?: (place: { name: string; address: string; lat: number; lng: number } | null) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export declare function AddressAutocomplete(props: AddressAutocompleteProps): React.ReactElement;

export default AddressAutocomplete;