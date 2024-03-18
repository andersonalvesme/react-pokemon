import axios from 'axios';
import { PokemonSlimType, PokemonType } from "@/shared/types/pokemon.type.ts";

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

interface GetAllResponse {
  count: number,
  results: PokemonSlimType[]
}

async function getAll(): Promise<GetAllResponse> {
  return axios
    .get<GetAllResponse>(`${BASE_URL}?limit=1500`) // TODO: Busca todos os registros pois não existe filtro no backend
    .then(response => response.data)
}

async function getByUrl(url: string): Promise<PokemonType> {
  return axios
    .get<PokemonType>(url)
    .then(response => response.data)
}

export {
  getAll,
  getByUrl
};

export type { GetAllResponse };

