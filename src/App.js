import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';

class App extends Component {

  state = {
    title: 'The Strain API'
  }

  render() {
    return (
      <div>
                <Nav />
                <br/>
        <h1>{this.state.title}</h1>
        <img className = "Cannabis" src={require('./images/Cannabis.svg')} alt=""/>
      </div>
    );
  }
}

export default App;
