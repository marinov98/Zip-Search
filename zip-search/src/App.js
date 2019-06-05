import React, { Component } from 'react';
import './App.css';
import Zip from 'Zip.js';

class App extends Component {
  render() {
    return (
      <div>
        <Zip zipcode='11223' />
      </div>
    )
  }
}

export default App;