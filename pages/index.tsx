import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  useEffect(() => {
    Promise.all(
      pokemonList
        .sort(() => 0.5 - Math.random())
        .slice(0, 10)
        .map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
    ).then((data) => setPokemonData(data));
  }, [pokemonList]);

  return (
    <div className="flex flex-wrap justify-center">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.sprites.front_default} />
      ))}
    </div>
  );
};

export default Home;