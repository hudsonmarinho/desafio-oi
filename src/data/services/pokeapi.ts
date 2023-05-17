import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = (page: number) =>
  axios.get(`${API_URL}/pokemon?limit=20&offset=${page}`);

export const getPokemonByName = (name: string) =>
  axios.get(`${API_URL}/pokemon/${name}`);
