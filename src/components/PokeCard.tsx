import React from 'react';

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
    return <div>Loading...</div>;
  }

  return (
    <div className="poke-card">
      <h2>{titleCase(data.name)}</h2>
      <img src={data.imageURL} alt={`Image of ${data.name}`} width='500' height='500'></img>
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