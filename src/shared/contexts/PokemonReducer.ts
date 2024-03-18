import { IPokemonState } from "@/shared/contexts/PokemonProvider.tsx";

export const SET_SEARCH = 'setSearch';
export const SET_SEARCH_FOCUS = 'setSearchFocus';
export const SET_SELECTED_ITEM = 'setSelectedItem';

type PokemonActionType =
  | { type: 'setSearch'; payload: { value: string } }
  | { type: 'setSearchFocus'; payload: { value: boolean } }
  | { type: 'setSelectedItem'; payload: { value: number } }

export const pokemonReducer = (state: IPokemonState, action: PokemonActionType): IPokemonState => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload.value
      }
    case SET_SEARCH_FOCUS:
      return {
        ...state,
        searchFocus: action.payload.value
      }
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload.value
      }
    default:
      return state
  }

}
