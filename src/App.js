import React, { Component } from 'react';
import Nav from './Nav';
import About from './About';
import './App.css';

class App extends Component {

  state = {
    title: 'The Strain API'
  }

  render() {
    return (
      <div>
        <head><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Arapey"/></head>
                <Nav />
                <br/>
        <h1>{this.state.title}</h1>
        <img className = "Cannabis" src={require('./images/Cannabis.svg')} alt=""/>
        <About />
      </div>
    );
  }
}

export default App;
