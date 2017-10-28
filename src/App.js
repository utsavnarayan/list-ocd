import React, { Component } from 'react';
import Home from './components/home/home'
import Header from './components/header/header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home />
      </div>
    );
  }
}

export default App;
