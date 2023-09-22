/**
 * Visit https://pokeapi.co/api/v2/pokemon?limit=100000 for a total count of pokemon
 * There are actually 1292 pokemon available to query, however, the ID pattern is inconsistent
 * after 1017, so for simplicity only the first 1017 are considered for this app
 */
const NUM_POKEMON: number = 1017;

interface PokemonData {
    name: string;
    abilities: Abilities[];
}

interface Ability {
    name: string;
    url: string;
}

interface Abilities {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}


class PokeFetchService {

    async fetchPokemonImage(index: number): Promise<any> {
        return; // TODO
    }

    async fetchRandomPokemon(): Promise<any> {
        return; // TODO
    }

    async fetchPokemonData(index: number): Promise<PokemonData> {
        try {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Failed to fetch Pokemon data. Status: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
            throw error;
        }
    }
}

export default PokeFetchService;
