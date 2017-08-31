import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import MartaDashboard from './MartaDashboard.js';
import DropDown from './DropDown.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>MARTA</h2>
        </div>
        <MartaDashboard />

        {/* This renders the dropdown. */}
        <DropDown />
      </div>
    );
  }
}

export default App;
