import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './pokemon';


function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <section class= 'container'>
        {pokemons.map((pokemon) => <Pokedex key={pokemon.id} pokemon = {pokemon} />)}
      </section>
    </div>
  );
}

export default App;
