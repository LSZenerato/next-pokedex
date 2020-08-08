import React from 'react';
import PokeApi from '../../requests/getPokemon';
import { PokemonList } from '../../components/organisms';

function Pokedex() {
    const { data, isError, isLoading } = PokeApi('');

    return (
        isLoading ? <h2>Loading...</h2>
        : isError ? <h2>Erro ao carregar Pokedex</h2>
        : <PokemonList pokeList={data.results} /> 
    );
}

export default Pokedex;