import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './pokemon';


function App() {
  return (
    <div class= 'container'>
      <h1>Pokedex</h1>
      {pokemons.map((pokemon) => <Pokedex key={pokemon.id} pokemon = {pokemon} />)}
    </div>
  );
}

export default App;
