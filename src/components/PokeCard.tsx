import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/styles.css';
import PokeFetchService from '../model/PokeFetchService';

/**
 * @param str String to capitalize
 * @returns String written in Title Case
 */
function titleCase(str: string): string {
  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

const pokeFetchService = new PokeFetchService();

const PokeCard: React.FC<{ index: number }> = ({ index }) => {
  const [data, setData] = useState<PokemonData | null>(null);
  const [loading, setLoading ] = useState(true);

  const imageURL = pokeFetchService.getPokemonImageURL(index);

  useEffect(() => {
    setLoading(true);
    pokeFetchService.fetchPokemonData(index).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [index]);

  if (index == null || loading) {
    return <div className="loading-div">Loading...</div>;
  }

  return (
    <div className="poke-card">
      <h2>{titleCase(data!.name)}</h2>
      <img src={imageURL} width={300} height={300} alt={data?.name || 'pokemon'} />
      <h3>Abilities:</h3>
      <ul>
        {data!.abilities.map((ability, index) => (
          <li key={index}>{titleCase(ability.ability.name)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeCard;