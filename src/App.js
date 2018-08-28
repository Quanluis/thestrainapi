import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>The Strain api</h1>
        <img className = "Cannabis" src={require('./images/Cannabis.svg')} alt=""/>
      </div>
    );
  }
}

export default App;
