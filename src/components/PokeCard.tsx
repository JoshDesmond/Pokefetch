import React from 'react';

interface PokemonData {
  name: string;
  abilities: { ability: { name: string } }[];
}

interface PokeCardProps {
  data: PokemonData | null;
}

/**
 * @param str String to capitalize
 * @returns String written in Title Case
 */
function titleCase(str: string): string {
  const words  = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

const PokeCard: React.FC<PokeCardProps> = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>; // You can render a loading message while data is being fetched
  }

  return (
    <div className="poke-card">
      <h2>{titleCase(data.name)}</h2>
      <h3>Abilities:</h3>
      <ul>
        {data.abilities.map((ability, index) => (
          <li key={index}>{titleCase(ability.ability.name)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeCard;