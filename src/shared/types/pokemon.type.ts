type PokemonSlimType = {
  name: string,
  url: string
}

type PokemonType = {
  id: number,
  name: string,
  sprites: PokemonSpritesType,
  abilities: PokemonAbilityType[]
}

type PokemonSpritesType = {
  front_default: string
}

type PokemonAbilityType = {
  slot: number,
  ability: {
    name: string
  }
}

export type {
  PokemonSlimType,
  PokemonType
}
