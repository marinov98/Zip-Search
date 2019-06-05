import React, { Component } from "react";
import axios from "axios";

class Zip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetZipcode: props.zipcode,
      citiesInZipcode: []
    };
  }

  fetchCitiesFromZipcode = async () => {
    try {
      let { data } = await axios.get(
        "http://ctp-zip-api.herokuapp.com/" + this.props.targetZipcode
      );
      console.log("DATA: " + data);
      this.setState({ citiesInZipcode: data.data });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.fetchCitiesFromZipcode();
    this.interval = setInterval(() => this.fetchCitiesFromZipcode(), 60 * 100);
  };

  render() {
    let displayCities = this.state.citiesInZipcode.map(element => (
      <li>{element}</li>
    ));
    return (
      <div className="cityFromZipcode">
        <div>{displayCities}</div>
      </div>
    );
  }
}

export default Zip;
