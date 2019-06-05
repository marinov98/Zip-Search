import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Zip Code Search</h1>
          <span> Zipe Code: </span>
          <input type="text" name="zipcode" />
        </div>
      </div>
    )
  }
}

export default App;