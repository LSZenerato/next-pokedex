import React from 'react';
import { SearchBar } from '../../molecules';
import Context from '../../../utils/context';

function Header() {

  const searchPokemon = () => alert('Buscar pokemon');

  return <Context.Provider value={{ callback: searchPokemon }} >
    <SearchBar />
  </Context.Provider>;
}

export default Header;