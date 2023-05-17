import PokemonTypeColors, {
  PokemonTypeColorAlias
} from "../helpers/pokemonTypeColors";

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null;
};

export const rgba = (value: string, opacity: number) =>
  `rgba(${hexToRgb(
    PokemonTypeColors[value as PokemonTypeColorAlias]
  )}, ${opacity})`;
