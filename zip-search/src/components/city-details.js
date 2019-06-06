import React, { Component } from "react";
import "./city-details.css";

export default class CityDetails extends Component {
  render() {
    let {
      RecordNumber,
      State,
      Lat,
      Long,
      LocationText,
      EstimatedPopulation,
      TotalWages
    } = this.props.city;
    return (
      <li className="city" key={RecordNumber}>
        <h1>{LocationText}</h1>
        <p>State: {State}</p>
        <p>Location: {"(" + Lat + "," + Long + ")"}</p>
        <p>Population(estimated): {EstimatedPopulation}</p>
        <p>Total Wages: {TotalWages}</p>
      </li>
    );
  }
}
