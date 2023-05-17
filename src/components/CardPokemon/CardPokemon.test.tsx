import React from "react";
import { render, screen } from "@testing-library/react";
import CardPokemon from ".";

jest.mock("../../helpers/pokemonTypeColors");

const pokemonData = {
  id: 1,
  name: "Charmander",
  types: ["fire"],
  image: "charmander.png",
  hp: 39,
  attack: 52,
  defense: 43
};

describe("<CardPokemon />", () => {
  it("should render the loading skeleton when loading is true", () => {
    const { container } = render(<CardPokemon pokemon={pokemonData} loading />);

    expect(container.querySelector(".skeleton-loading")).toBeInTheDocument();
  });

  it("should render the pokemon card when loading is false", () => {
    const { container } = render(
      <CardPokemon pokemon={pokemonData} loading={false} />
    );

    expect(container.querySelector(".card-pokemon")).toBeInTheDocument();
  });

  it("should render the pokemon info correctly", () => {
    render(<CardPokemon pokemon={pokemonData} loading={false} />);

    expect(screen.getByText("Charmander")).toBeInTheDocument();
    expect(screen.getByText("fire")).toBeInTheDocument();
  });

  it("should render the pokemon stats correctly", () => {
    render(<CardPokemon pokemon={pokemonData} loading={false} />);

    expect(screen.getByText("HP")).toBeInTheDocument();
    expect(screen.getByText("39")).toBeInTheDocument();

    expect(screen.getByText("Attack")).toBeInTheDocument();
    expect(screen.getByText("52")).toBeInTheDocument();

    expect(screen.getByText("Defense")).toBeInTheDocument();
    expect(screen.getByText("43")).toBeInTheDocument();
  });
});
