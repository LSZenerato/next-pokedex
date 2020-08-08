import React from 'react';
import getApiData from '../../requests/getApiData';

function Home() {
    const { data, isLoading, isError } = getApiData('https://pokeapi.co/api/v2/pokemon');

    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    if (data) {
        const results = data.results;

        return <div>
            {results.map(v => <h4 key={v.name}> {v.name} </h4> )}
        </div>
    }
}
  
export default Home