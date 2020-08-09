import React, { useState } from 'react';
import style from './styles.module.scss';
import { PokeCard } from '../../molecules';
import useApi from '../../../requests/getApi';
import Loading from '../../atoms/Loading';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function PokemonList() {
  const [ link, setLink ] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
  const { data, isError, isLoading } = useApi(link);

  const map = () => data.results.map((pokemon, index) => <PokeCard key={index} pokemon={pokemon} />);

  return isLoading ? <Loading />
    : isError ? null
    : <div className={style.grid}>
      {map()}
      <button onClick={() => setLink(data.next)}> Load more</button>
    </div>;
}

export default PokemonList;