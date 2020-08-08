import React from 'react';

function Home({ data }) {
    const results = data.results;

    return <div>
        {results.map(v => <h4 key={v.name}> {v.name} </h4> )}
    </div>
}
  
  // This gets called on every request
export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
  
export default Home