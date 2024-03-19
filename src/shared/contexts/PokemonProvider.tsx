import { ReactNode, useReducer } from "react";
import { PokemonContext } from "@/shared/contexts/PokemonContext.tsx";
import { pokemonReducer, SET_SEARCH, SET_SEARCH_FOCUS, SET_SELECTED_ITEM } from "@/shared/contexts/PokemonReducer.ts";

export interface IPokemonState {
  search: string;
  searchFocus: boolean;
  selectedItem: number;
}

const INITIAL_STATE = {
  search: '',
  searchFocus: false,
  selectedItem: 0
}

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE)

  const setSearch = (value: string) => {
    dispatch({
      type: SET_SEARCH,
      payload: { value }
    })
  }

  const setSearchFocus = (value: boolean) => {
    dispatch({
      type: SET_SEARCH_FOCUS,
      payload: { value }
    })
  }

  const setSelectedItem = (value: number) => {
    dispatch({
      type: SET_SELECTED_ITEM,
      payload: { value }
    })
  }

  return (
    <PokemonContext.Provider value={{
      ...state,
      setSearch,
      setSearchFocus,
      setSelectedItem,
    }}>
      {children}
    </PokemonContext.Provider>

  )
}
