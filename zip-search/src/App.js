import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import CityDetails from "./components/city-details";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: "",
      citiesInZipcode: [],
    };
  }

  getZip = e => {
    this.setState({ zipcode: e.target.value });
  };

  fetchForCities = async () => {
    try {
      let { data } = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`);
      this.setState({ citiesInZipcode: data });
    } catch (err) {
      console.log(err);
    }
    console.log(this.state.citiesInZipcode);
  };

  render() {
    let displayCities = this.state.citiesInZipcode.map((city, index) => (
      <CityDetails citiesInZipcode={this.state.citiesInZipcode[index]} key={city.locationText} />
    ));
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
          <button onClick={this.fetchForCities}> Search </button>
          <ul>
            {displayCities}
          </ul>
        </div>
      </div>
    );
  }
}