import React, { Component }from 'react';

const fullName = (name, lastname) => {
  return `${name} ${lastname}`
}

class Biografia extends Component {
  render() {
    return <div>
      <h1> {fullName('Luana', 'Moneró')}</h1>
      <p>Olá, esse é meu primeiro React! :)</p>
    </div>
  }
}

export default Biografia;