import React, { Component } from "react";
import "./App.css";
import Zip from "./components/Zip";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ""
    };
  }

  getZip = e => {
    this.setState({ zipcode: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Zip Code Search</h1>
          <span> Zipe Code: </span>
          <input
            onChange={this.getZip}
            value={this.state.zipcode}
            type="text"
            name="zipcode"
          />
          <button onClick={this.searchForCities}> Search </button>
          <Zip targetZipcode={this.state.zipcode} />
        </div>
      </div>
    );
  }
}
