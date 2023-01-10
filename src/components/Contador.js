import React from "react";
const numero= Math.floor(Math.random() * 100);
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { conteo: props.conteoInicial };
  }

  incrementar = () => {
    this.setState({ conteo: this.state.conteo + numero });
  };
  decrementar = () => {
    this.setState({ conteo: this.state.conteo - 1 });
  };
  render() {
    return (
      <div>
        <h1>Conteo: {this.state.conteo}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }
}
export default Contador;
