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
  const colorCombinations: { [index: string]: boolean } = {}

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

  const getItemBgColor = (value: string) => {
    let colorCount: number = 1
    let colorFound = undefined
    const colors: string[] = [
      'bg-green-500',
      'bg-red-500',
      'bg-blue-500',
      'bg-yellow-500',
      'bg-orange-500',
      'bg-amber-500',
      'bg-lime-500',
      'bg-emerald-500',
      'bg-teal-500',
      'bg-cyan-500',
      'bg-sky-500',
    ]

    while (colorFound === undefined) {
      colorFound = colors.find(color => !colorCombinations[colorCount + value + color])

      if (colorFound) {
        colorCombinations[colorCount + value + colorFound] = true
      } else {
        colorCount += 1
      }
    }

    return colorFound
  }

  return (
    <PokemonContext.Provider value={{
      ...state,
      setSearch,
      setSearchFocus,
      setSelectedItem,
      getItemBgColor,
    }}>
      {children}
    </PokemonContext.Provider>

  )
}
