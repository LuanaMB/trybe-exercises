import React from 'react';

class Pokedex extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div class="app">
        <main class= "card">
          <h2>{name}</h2>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <img src={image} alt={name}/>
        </main>
      </div>
    );
  };
};

export default Pokedex;