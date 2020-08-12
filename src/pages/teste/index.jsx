import React, { useState, useEffect } from 'react';
import useApi from '../../requests/getApi';

function Teste() {
  const { data, isError, isLoading } = useApi("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10");

  const list = [{tipo: 'c'}, {tipo: 'b'}];

  const checked = (tipo) => {
    let result = true;

    for(let i = 0; i < list.length; i++) {
      if(list[i].tipo === tipo) {
        result = false;
      }
    }

    return result
  }

  return <button disabled={checked('a')} > BOTAO</button>
}

export default Teste;