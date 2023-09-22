class PokeFetchService {
  async fetchPokemonData(index: number): Promise<PokemonData> {
    try {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon data. Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      throw error;
    }
  }

  getPokemonImageURL(index: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
  }
}

export default PokeFetchService;
