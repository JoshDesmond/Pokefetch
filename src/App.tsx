import { useState } from 'react';
import getRandomIndex from './model/GetRandomIndex';
import PokeCard from './components/PokeCard';
import './styles/styles.css';

function App() {
  console.debug('Rendering App component');
  const [pokemonIndex, setPokemonIndex] = useState<number>(getRandomIndex());

  const generateNewIndex = async () => {
      setPokemonIndex(getRandomIndex());
  };

  return (
    <div className="app-container">
      <header className="app-header">PokeFetch</header>
      <div className="app-content">
        <PokeCard index={pokemonIndex} />
        <button className="app-button" onClick={generateNewIndex}>
          Query Random Pokemon!
        </button>
      </div>
    </div>
  );
}


export default App
