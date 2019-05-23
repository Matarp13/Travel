import React from 'react';
import logo from './logo.png';
import './App.css';
import PrimarySearchAppBar from './Components/SearchBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <PrimarySearchAppBar/>
      </header>
    </div>
  );
}

export default App;
