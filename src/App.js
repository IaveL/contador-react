import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0
  };
  // cria uma arrow function para ADICIONAR um número. SE(?) o número dentro do state for MENOR ou IGUAL a 9 -> somar 1. ELSE(:) mantém o número atual

  add = () => {
    this.setState({
      count: this.state.count <= 9 ? this.state.count + 1 : this.state.count
    });
  };

  //função para remover. se o número for MAIOR que zero (para não acabar com n negativo) diminui um.

  remove = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : this.state.count
    })};

  clear = () => {
    this.setState({
      count: 0
    })
  };

render(){
  return(
    <div className="MainBox">
        <h1>Contador!</h1>
        <div className="Counter">
          <button onClick={this.add}>+</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.remove}>-</button>
          <button onClick={this.clear}>Clear</button>
        </div>
      </div>
  )
}

  
}
export default App;
