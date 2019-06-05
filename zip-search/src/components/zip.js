import React, { Componenet } from "react";
import axios from "axios";

class Zip extends Componenet {
  constructor(props) {
    super(props);
    this.state = {
      targetZipcode: props.zipcode,
      citiesInZipcode: []
    };
  }

  async fetchCitiesFromZipcode() {
    try {
      let { data } = await axios.get("http://ctp-zip-api.herokuapp.com/");
      let targetZipcode = this.state.targetZipcode;
      let result = data.filter();
      this.setState({ citiesInZipcode: result });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let displayCities = this.state.data.map(element => <li>{element}</li>);
    return (
      <div className="cityFromZipcode">
        <div>{displayCities}</div>
      </div>
    );
  }
}

export default Zip;
