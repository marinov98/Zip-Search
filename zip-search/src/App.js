import React, { Component } from "react";
import "./App.css";
import Zip from "./components/zip.js";

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

  searchForCities = e => {
    return <Zip targetZipcode={this.state.zipcode} />;
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Zip Code Search</h1>
          <span> Zip Code: </span>
          <input
            onChange={this.getZip}
            value={this.state.zipcode}
            type="text"
            name="zipcode"
          />
          <button onClick={this.searchForCities}> Search </button>
        </div>
      </div>
    );
  }
}
