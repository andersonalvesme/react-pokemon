import './App.css'
import PokemonCard from "@/pages/pokemon/PokemonCard.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonProvider } from "@/shared/contexts/PokemonProvider.tsx";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[450px] mx-auto my-4">
        <PokemonProvider>
          <PokemonCard/>
        </PokemonProvider>
      </div>
    </QueryClientProvider>
  )
}

export default App
