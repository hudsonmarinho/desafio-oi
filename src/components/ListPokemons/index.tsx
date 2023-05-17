import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "../CardPokemon";
import Pagination from "../Pagination";

import { getPokemonList } from "../../data/services/pokeapi";
import { IPokemon } from "../../data/interface/pokemon.interface";

import ImageNotFound from "../../assets/images/image-not-found.png";

import { Container } from "./styles";

const ListPokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    setLoading(true);

    getPokemonList((currentPage - 1) * 10).then((response) => {
      const pokemonPromises = response.data.results.map((result: any) =>
        axios
          .get(result.url)
          .then((pokemonResponse: any) => pokemonResponse.data)
      );

      Promise.all(pokemonPromises).then((pokemons: any) => {
        setPokemons(
          pokemons.map((pokemon: any) => ({
            id: pokemon.id,
            name: pokemon.name,

            image:
              pokemon.sprites.other.home.front_default ??
              pokemon.sprites.other.dream_world.front_default ??
              pokemon.sprites.front_default ??
              ImageNotFound,

            types: pokemon.types.map((type: any) => type.type.name),
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat
          }))
        );

        setTotalPages(Math.ceil(response.data.count / 10));
        setLoading(false);
      });
    });
  }, [currentPage]);

  return (
    <>
      <Container>
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} loading={loading} />
        ))}
      </Container>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: any) => {
          handleScrollToTop();
          setCurrentPage(page);
        }}
      />
    </>
  );
};

export default ListPokemons;
