import { PokemonType } from "@/shared/types/pokemon.type.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { useContext, useMemo } from "react";
import { PokemonContext } from "@/shared/contexts/PokemonContext.tsx";
import classNames from 'classnames';

interface IPokemonCardListItem {
  pokemon: PokemonType
}

function PokemonCardListItem({ pokemon }: IPokemonCardListItem) {
  const context = useContext(PokemonContext)

  const getBgColor = useMemo(() => {
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

    return colors[Math.floor(Math.random() * colors.length)]
  }, [])

  const pokemonFallback = pokemon.name.split('-', 2).map((chunk) => chunk[0]).join('').toUpperCase();

  return (
    <div
      className={classNames('flex items-center space-x-4 p-2 transition-all rounded', {
        'bg-accent': context.selectedItem === pokemon.id,
      })}
      onMouseOver={() => context.setSelectedItem(pokemon.id)}
    >
      <Avatar>
        <AvatarImage alt={pokemon.name}/>
        <AvatarFallback className={getBgColor}>
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

export default PokemonCardListItem
