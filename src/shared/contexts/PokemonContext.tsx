import { createContext } from "react";

interface IContextProps {
  selectedItem: number;
  search: string;
  searchFocus: boolean;

  // methods
  setSearch: (value: string) => void;
  setSearchFocus: (value: boolean) => void;
  setSelectedItem: (value: number) => void;
}

export const PokemonContext = createContext({} as IContextProps)
