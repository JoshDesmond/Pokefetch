# PokeFetch

Pokefetch is a quickly made React application that connects to https://pokeapi.co/‘s API. The page will randomly fetch a Pokemon on initial start, and display the image of the pokemon, its name, and its abilities. There is also be a button that will fetch a random pokemon.

### Build Instructions
This app is built with bun. To build, first install bun either via instructions at https://bun.sh/, or via `npm install -g bun`

After, run `bun install` to install depedencies, and then run the project with either `bun dev`, or do `bun run build` followed by `bun run preview` to build and preview for production.

### Bun
This project was created using `bun create vite` in bun v1.0.2, and uses React + TypeScript + Vite. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
