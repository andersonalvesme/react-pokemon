import { PokemonType } from "@/shared/types/pokemon.type.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { useContext, useMemo } from "react";
import { PokemonContext } from "@/shared/contexts/PokemonContext.tsx";
import classNames from 'classnames';

interface IPokemonCardListItem {
  pokemon: PokemonType
}

export default function PokemonCardListItem({ pokemon }: IPokemonCardListItem) {
  const context = useContext(PokemonContext)

  const pokemonFallback = pokemon.name.split('-', 2).map((chunk) => chunk[0]).join('').toUpperCase();
  const colorClass = useMemo(() => context.getItemBgColor(pokemonFallback), [pokemonFallback])

  return (
    <div
      className={classNames('flex items-center space-x-4 p-2 transition-all rounded', {
        'bg-gray-400': context.selectedItem === pokemon.id,
      })}
      onMouseOver={() => context.setSelectedItem(pokemon.id)}
    >
      <Avatar>
        <AvatarImage alt={pokemon.name}/>
        <AvatarFallback className={colorClass}>
          {pokemonFallback}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium leading-none">
          {pokemon.name}
        </p>
        <div className="flex flex-row gap-1">
          {pokemon.abilities.map(({ ability, slot }) => <Badge key={slot} variant="outline">{ability.name}</Badge>)}
        </div>
      </div>
    </div>
  )
}
