import { create } from "zustand";

type AddressStore = {
  searchQuery: string;
  savedAddresses: string[];
  setSearchQuery: (value: string) => void;
  useCurrentLocation: () => void;
  addNewAddress: () => void;
};

export const useAddressStore = create<AddressStore>((set) => ({
  searchQuery: "",
  savedAddresses: [],
  setSearchQuery: (value) => set({ searchQuery: value }),
  useCurrentLocation: () => set({ searchQuery: "Current location selected" }),
  addNewAddress: () => set((state) => ({
    savedAddresses: [...state.savedAddresses, `Address ${state.savedAddresses.length + 1}`]
  }))
}));
