import React, { Component } from "react";

export default class CityDetails extends Component {
  render() {
    let {
      recordNumber,
      zipcode,
      zipCodeType,
      city,
      state,
      locationType,
      Lat,
      Long,
      Xaxis,
      Yaxis,
      Zaxis,
      worldRegion,
      country,
      locationText,
      location,
      decomisioned,
      taxReturnsFiled,
      estimatedPopulation,
      totalWages,
      notes
    } = this.props.data;
    return (
      <li className="city">
        <h1>{locationText}</h1>
        <p>State: {state}</p>
        <p>Location: {(Xaxis, Yaxis)}</p>
        <p>Population(estimated): {estimatedPopulation}</p>
        <p>Total Wages: {totalWages}</p>
      </li>
    );
  }
}
