/**
 * Visit https://pokeapi.co/api/v2/pokemon?limit=100000 for a total count of pokemon
 * There are actually 1292 pokemon available to query, however, the ID pattern is inconsistent
 * after 1017, so for simplicity only the first 1017 are considered for this app
 */
const NUM_POKEMON: number = 1017;

export default function getRandomIndex(): number {
  return Math.floor(Math.random() * (NUM_POKEMON)) + 1;
}