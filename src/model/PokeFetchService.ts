/**
 * Visit https://pokeapi.co/api/v2/pokemon?limit=100000 for a total count of pokemon
 * There are actually 1292 pokemon available to query, however, the ID pattern is inconsistent
 * after 1017, so for simplicity only the first 1017 are considered for this app
 */
const NUM_POKEMON: number = 1017;

class PokeFetchService {

  async fetchRandomPokemon(): Promise<PokemonData> {
    return this.fetchPokemonData(getRandomId());
  }

  private async fetchPokemonData(index: number): Promise<PokemonData> {
    try {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon data. Status: ${response.status}`);
      }

      const data = await response.json();
      data.imageURL = getPokemonImageURL(index);
      return data as PokemonData;
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      throw error;
    }
  }
}

function getPokemonImageURL(index: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
}

function getRandomId(): number {
  return Math.floor(Math.random() * (NUM_POKEMON)) + 1;
}

export default PokeFetchService;
