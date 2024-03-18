import { createContext } from "react";

interface IContextProps {
  selectedItem: number;
  search: string;
  searchFocus: boolean;

  // methods
  setSearch: (value: string) => void;
  setSearchFocus: (value: boolean) => void;
  setSelectedItem: (value: number) => void;
  getItemBgColor: (value: string) => string;
}

export const PokemonContext = createContext({} as IContextProps)
