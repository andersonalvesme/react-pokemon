import * as pokemonService from "@/shared/services/pokemons.service.ts";
import { useQueries, useQuery } from "@tanstack/react-query";
import { PokemonSlimType } from "@/shared/types/pokemon.type.ts";
import PokemonCardListItem from "@/pages/pokemon/PokemonCardListItem.tsx";
import { useContext, useEffect } from "react";
import { PokemonContext } from "@/shared/contexts/PokemonContext.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";

const KEY_POKEMONS = "POKEMONS";
const KEY_POKEMON = "POKEMON";

const usePokemonsSlim = () => {
  return useQuery({
    queryKey: [KEY_POKEMONS],
    queryFn: pokemonService.getAll,
    staleTime: Infinity
  });
};

const usePokemons = (pokemons: PokemonSlimType[] = []) => {
  return useQueries({
    queries: pokemons.map((pokemon) => ({
        queryKey: [KEY_POKEMON, pokemon.name],
        queryFn: () => pokemonService.getByUrl(pokemon.url),
        staleTime: Infinity
      })
    ),
    combine: (results) => ({
      data: results.map((result) => result.data),
      isPending: results.some((result) => result.isPending)
    })
  });
};

function PokemonCardList() {
  const context = useContext(PokemonContext);
  const { data: pokemonsSlim } = usePokemonsSlim();
  const { data: pokemons, isPending } = usePokemons(pokemonsSlim?.results);
  const filtered = pokemons.filter(pokemon => pokemon && pokemon.name.match(context.search))

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (context.selectedItem && e.code === 'ArrowUp') {
        e.preventDefault()

        const index = filtered.findIndex(value => value?.id === context.selectedItem)
        const toFocus = filtered[index - 1]

        if (toFocus) {
          context.setSelectedItem(toFocus.id)
        }
      }

      if (e.code === 'ArrowDown') {
        e.preventDefault()

        if (context.searchFocus) {
          const toFocus = filtered[0]

          if (toFocus) {
            context.setSelectedItem(toFocus.id)
            context.setSearchFocus(false)
          }
        } else if (context.selectedItem) {
          const index = filtered.findIndex(value => value?.id === context.selectedItem)
          const toFocus = filtered[index + 1]

          if (toFocus) {
            context.setSelectedItem(toFocus.id)
          }
        }
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [filtered]);

  return (
    <ScrollArea className="h-[calc(100vh-11rem)]">
      {isPending && <small>Carregando...</small>}
      {!isPending && filtered.map((pokemon) => {
        if (!pokemon) return
        return <PokemonCardListItem key={pokemon?.id} pokemon={pokemon}/>
      })}
    </ScrollArea>
  )
}

export default PokemonCardList
