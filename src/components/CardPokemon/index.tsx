import React from "react";

import PokemonTypeColors, {
  PokemonTypeColorAlias
} from "../../helpers/pokemonTypeColors";
import { IPokemon } from "../../data/interface/pokemon.interface";

import { rgba, showIdWithZero } from "../../utils";

import Skeleton from "./skeleton";

import {
  Container,
  Description,
  Image,
  Info,
  Label,
  Stat,
  Stats,
  Tag,
  Tags,
  Value
} from "./styles";

interface IProps {
  pokemon: IPokemon;
  loading: boolean;
}

const CardPokemon: React.FC<IProps> = ({ pokemon, loading }) => {
  return (
    <div className="card-pokemon">
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Container>
            <Image
              style={{
                backgroundColor: rgba(pokemon.types[0], 0.4)
              }}
            >
              <img src={pokemon.image} alt={pokemon.name} />
            </Image>

            <Description>
              <Info>
                <small>{showIdWithZero(pokemon.id)}</small>
                <h3>{pokemon.name}</h3>
              </Info>

              <Tags>
                {pokemon.types.map((type: any) => {
                  return (
                    <Tag
                      key={type}
                      style={{
                        backgroundColor:
                          PokemonTypeColors[type as PokemonTypeColorAlias]
                      }}
                    >
                      {type}
                    </Tag>
                  );
                })}
              </Tags>
            </Description>

            <Stats>
              <Stat
                style={{
                  backgroundColor: rgba(pokemon.types[0], 1)
                }}
              >
                <Label>HP</Label>
                <Value>{pokemon.hp}</Value>
              </Stat>

              <Stat
                style={{
                  backgroundColor: rgba(pokemon.types[0], 1)
                }}
              >
                <Label>Attack</Label>
                <Value>{pokemon.attack}</Value>
              </Stat>

              <Stat
                style={{
                  backgroundColor: rgba(pokemon.types[0], 1)
                }}
              >
                <Label>Defense</Label>
                <Value>{pokemon.defense}</Value>
              </Stat>
            </Stats>
          </Container>
        </>
      )}
    </div>
  );
};

export default CardPokemon;
