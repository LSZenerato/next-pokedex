import React from 'react';
import { SearchBar } from '../../molecules';
import Context from '../../../context/context';

function Header() {

  const searchPokemon = () => alert('Buscar pokemon');
  const blaPokemon = (txt) => alert(txt);

  return <Context.Provider value={{ callback: searchPokemon, callback2: blaPokemon }} >
    <div>
      <SearchBar />
    </div>
  </Context.Provider>;
}

export default Header;