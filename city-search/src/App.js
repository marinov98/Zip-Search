import "./App.css";
import axios from "axios";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "",
      data: []
    };
  }

  getCityName = e => {
    this.setState({ cityName: e.target.value });
  };

  fetchZipCodes = async () => {
    try {
      let { data } = await axios.get(
        "http://ctp-zip-api.herokuapp.com/city/" + this.state.cityName
      );
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let zips = this.state.data.map(zip => <li key={zip}>{zip}</li>);
    return (
      <div className="App">
        <div className="App-header">
          <h1>City Search</h1>
          <span> City: </span>
          <input
            onChange={this.getCityName}
            value={this.state.cityName}
            type="text"
            name="cityName"
          />
          <button onClick={this.fetchZipCodes}>Search</button>
          <ul>{zips}</ul>
        </div>
      </div>
    );
  }
}
