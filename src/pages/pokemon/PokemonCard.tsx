import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import InputSearch from "@/components/InputSearch.tsx";
import PokemonCardList from "@/pages/pokemon/PokemonCardList.tsx";

export default function PokemonCard() {
  return (
    <Card className="flex flex-col w-[450px] h-[calc(100vh-2rem)] my-4 mx-auto">
      <CardHeader>
        <CardTitle>Lista de Pokémons</CardTitle>
        <CardDescription>Lista de pokémons extraidos da API https://pokeapi.co/</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <InputSearch/>
        <PokemonCardList/>
      </CardContent>
    </Card>
  )
}
