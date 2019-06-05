import React, { Component } from "react";

export default class CityDetails extends Component {
  render() {
    let {
      recordNumber,
      zipcode,
      zipCodeType,
      city,
      State,
      locationType,
      Lat,
      Long,
      Xaxis,
      Yaxis,
      Zaxis,
      worldRegion,
      country,
      LocationText,
      location,
      decomisioned,
      taxReturnsFiled,
      EstimatedPopulation,
      TotalWages,
      notes
    } = this.props.citiesInZipcode;
    console.log(this.props.citiesInZipcode);
    return (
      <li className="city" key={LocationText}>
        <h1>{LocationText}</h1>
        <p>State: {State}</p>
        <p>Location: {'(' + Xaxis + ',' + Yaxis + ')'}</p>
        <p>Population(estimated): {EstimatedPopulation}</p>
        <p>Total Wages: {TotalWages}</p>
      </li>
    );
  }
}
