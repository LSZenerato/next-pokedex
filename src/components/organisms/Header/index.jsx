import React from 'react';
import { SearchBar } from '../../molecules';
import Context from '../../../context';

function Header() {

  const searchPokemon = () => alert('Buscar pokemon');

  return <Context.Provider value={{ callback: searchPokemon }} >
    <div>
      <SearchBar />
    </div>
  </Context.Provider>;
}

export default Header;