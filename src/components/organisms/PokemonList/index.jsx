import React, { useState, createContext } from 'react';
import style from './styles.module.scss';
import { PokeCard } from '../../molecules';
import useApi from '../../../requests/getApi';
import Loading from '../../atoms/Loading';
import { IconButton } from '../../atoms';
import { FaPlus } from 'react-icons/fa';
import Context from '../../../context';

function PokemonList() {
  const [ link, setLink ] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10");
  const { data, isError, isLoading } = useApi(link);

  const loadMore = () => setLink(data.next);
  const seeDetails = () => alert('Ver detalhes');

  const ListGenerator = () =>{
    return <Context.Provider value={{ callback: seeDetails }}>
      <div className={style.grid}>
        {data.results.map((pokemon, index) => <PokeCard key={index} pokemon={pokemon} />)}
      </div>
    </Context.Provider>
  }

  const ShowButton = () =>{
    return <Context.Provider value={{ callback: loadMore }}>
      <div className={style.icon_div}>
        <IconButton> <FaPlus /> </IconButton>
      </div>
    </Context.Provider>
  }

  return isLoading ? <Loading />
    : isError ? null
    : <>
      { ListGenerator() }
      { ShowButton() }
    </>;
}

export default PokemonList;