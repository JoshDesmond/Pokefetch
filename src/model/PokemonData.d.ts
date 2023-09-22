// pokemonData.ts

/**
 * This is the typeDef for data
 */
interface PokemonData {
  name: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  imageURL: string;
}
