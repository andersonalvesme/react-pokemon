import { Input } from "@/components/ui/input.tsx";
import { Search } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { PokemonContext } from "@/shared/contexts/PokemonContext.tsx";

export default function InputSearch() {
  const context = useContext(PokemonContext)
  const [search, setSearch] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const setFocusIn = () => {
    context.setSearchFocus(true)
  }

  const setFocusOut = () => {
    context.setSearchFocus(false)
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      context.setSearch(search)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [search]);

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"/>
      <Input
        value={search}
        ref={inputRef}
        placeholder="Pesquisar..."
        className="pl-8"
        onFocus={setFocusIn}
        onBlur={setFocusOut}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
