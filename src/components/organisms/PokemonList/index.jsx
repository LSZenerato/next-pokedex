import React, { useContext } from 'react';
import style from './styles.module.scss';
import { PokeCard } from '../../molecules';

import PokedexContext from "../../../pages/pokedex/context.jsx";

function PokemonList({ pokeList }) {

  return <div className={style.grid}>
    {pokeList.map((pokemon, index) => {
      return <PokedexContext.Provider value={pokemon}>
        <PokeCard />
      </PokedexContext.Provider>
    })}
  </div>;
}

export default PokemonList;