import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import InputSearch from "@/components/InputSearch.tsx";
import PokemonCardList from "@/pages/pokemon/PokemonCardList.tsx";

export default function PokemonCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Pokémons</CardTitle>
        <CardDescription>Lista de pokémons extraidos da API https://pokeapi.co/</CardDescription>
      </CardHeader>
      <CardContent>
        <InputSearch/>
        <PokemonCardList/>
      </CardContent>
    </Card>
  )
}
