import { useEffect, useState } from 'react';
import PokeFetchService from './model/PokeFetchService';
import PokeCard from './components/PokeCard';

const pokeFetchService = new PokeFetchService();

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokeData = await pokeFetchService.fetchPokemonData(2);
        setPokemonData(pokeData);
      } catch (error) {
        // TODO set error state
      }
    }

    fetchPokemon(); // Call the function to initiate the fetch
  }, []);

  return (
    <>
      <header>PokeFetch</header>
      <body>
        <PokeCard data={pokemonData} />
      </body>
    </>
  );
}


export default App
