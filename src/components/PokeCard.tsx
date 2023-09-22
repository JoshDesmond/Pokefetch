import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/styles.css';
import PokeFetchService from '../model/PokeFetchService';

/**
 * @param str String to capitalize
 * @returns String written in Title Case
 */
function titleCase(str: string | null | undefined): string {
  if (!str) return '';

  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

const pokeFetchService = new PokeFetchService();

const PokeCard: React.FC<{ index: number }> = ({ index }) => {
  const [data, setData] = useState<PokemonData | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);

  const imageURL = pokeFetchService.getPokemonImageURL(index);

  useEffect(() => {
    setLoadingData(true);
    pokeFetchService.fetchPokemonData(index).then(data => {
      setData(data);
      setLoadingData(false);
    });
  }, [index]);

  return (
    <div className="poke-card">
      {/* Conditionally show loading display */}
      <div style={{ display: (loadingData || loadingImage) ? 'block' : 'none' }}>
        Loading...
      </div>
      
      {/* Always render in dom in order for the image to pre-load, but conditionally show it */}
      <div style={{ display: (loadingData || loadingImage) ? 'none' : 'block' }}>
        <h2>{titleCase(data?.name)}</h2>
        <img 
          src={imageURL} 
          width={300} 
          height={300} 
          alt={data?.name || 'pokemon'}
          onLoad={() => setLoadingImage(false)} 
        />
        <h3>Abilities:</h3>
        <ul>
          {data?.abilities.map((ability, idx) => (
            <li key={idx}>{titleCase(ability.ability.name)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeCard;