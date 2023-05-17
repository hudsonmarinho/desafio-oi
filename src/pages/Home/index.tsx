import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import ListPokemons from "../../components/ListPokemons";

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Wrapper>
        <ListPokemons />
      </Wrapper>
    </>
  );
};

export default Home;
