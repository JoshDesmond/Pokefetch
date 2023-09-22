import { useEffect, useState } from 'react';
import PokeFetchService from './model/PokeFetchService';
import PokeCard from './components/PokeCard';
import './styles/styles.css';

const pokeFetchService = new PokeFetchService();

function App() {
  console.debug('Rendering App component');
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

    console.debug('Fetching initial pokemon');
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
    <div className="app-container">
      <header className="app-header">PokeFetch</header>
      <div className="app-content">
        <PokeCard data={pokemonData} />
        <button className="app-button" onClick={queryNewPokemon}>
          Query Random Pokemon!
        </button>
      </div>
    </div>
  );
}


export default App
