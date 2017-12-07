import React, { Component } from 'react';
import ProductList from './components/ProductList'
import './App.css';
import './seed.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Hunt Your Next Favorite Product! :) </h1>
        </header>
          <ProductList/>
      </div>
    );
  }
}

export default App;
