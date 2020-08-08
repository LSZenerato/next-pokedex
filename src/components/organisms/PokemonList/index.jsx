import React from 'react';
import { PokeCard } from '../../molecules';

function PokemonList({ pokeList }) {
  return pokeList.map((pokemon, index) => <PokeCard />);
}

export default PokemonList;