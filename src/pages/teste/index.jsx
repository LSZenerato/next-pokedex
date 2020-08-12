import React, { useState, useEffect } from 'react';
import useApi from '../../requests/getApi';

function Teste() {
  const { data, isError, isLoading } = useApi("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10");

  // const [resultado, setResultado] = useState({});  

  // useEffect(() => {
  //   const result = async () => {
  //     const tempResult = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
  //       .then(res => res.json())
  //       .then(data => data);
  
  //       setResultado(tempResult);
  //   }

  //   result();
  // }, []);

  return isLoading ? <h4>is loading...</h4>
    : isError ? <h4>error</h4>
    : data.results.map(v => <h2>{v.name}</h2>)
}

export default Teste;