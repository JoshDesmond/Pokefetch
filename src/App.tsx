import { useEffect, useState } from 'react';
import PokeFetchService from './model/PokeFetchService';
import PokeCard from './components/PokeCard';

const pokeFetchService = new PokeFetchService();

function App() {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokeData = await pokeFetchService.fetchRandomPokemon();
        setPokemonData(pokeData);
      } catch (error) {
        // TODO set error state
      }
    }

    fetchPokemon(); // Call the function to initiate the fetch
  }, []);

  const queryNewPokemon = async () => {
    try {
      const pokeData = await pokeFetchService.fetchRandomPokemon();
      setPokemonData(pokeData);
    } catch (error) {
      // TODO handle errors
    }
  };

  return (
    <>
      <header>PokeFetch</header>
      <body>
        <PokeCard data={pokemonData} />
        <button onClick={queryNewPokemon}>Query Random Pokemon!</button>
      </body>
    </>
  );
}


export default App
