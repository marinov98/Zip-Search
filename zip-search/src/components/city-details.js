import React, { Component } from "react";

export default class CityDetails extends Component {
  render() {
    let {
      RecordNumber,
      State,
      Xaxis,
      Yaxis,
      LocationText,
      EstimatedPopulation,
      TotalWages
    } = this.props.city;
    return (
      <li className="city" key={RecordNumber}>
        <h1>{LocationText}</h1>
        <p>State: {State}</p>
        <p>Location: {'(' + Xaxis + ',' + Yaxis + ')'}</p>
        <p>Population(estimated): {EstimatedPopulation}</p>
        <p>Total Wages: {TotalWages}</p>
      </li>
    );
  }
}
