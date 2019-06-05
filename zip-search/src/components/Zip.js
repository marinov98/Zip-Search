import React, { Component } from "react";
import axios from "axios";
import CityDetails from "./city-details";

class Zip extends Component {
    constructor(props) {
        super(props);
        console.log("props:", props);
        console.log("this.props:", this.props);
        this.state = {
            targetZipcode: props.zipcode,
            citiesInZipcode: []
        };
    }

    fetchCitiesFromZipcode = async () => {
        console.log("in fetch");
        try {
            let { data } = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.targetZipcode}`);
            console.log("DATA: " + data);
            this.setState({ citiesInZipcode: data });
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount = () => {
        console.log("did mount");
        this.fetchCitiesFromZipcode();
    };

    render() {
        let displayCities = this.state.citiesInZipcode.map(city => (
            // <div>
            //     <div>{city.City}</div>
            //     <div>State: {city.State}</div>
            //     <div>Location: ({city.Lat}, {city.Long})</div>
            //     <div>Population (estimated): {city.EstimatedPopulation}</div>
            //     <div>Total Wages: {city.TotalWages}</div>
            // </div>
            <CityDetails citiesInZipcode={this.state.citiesInZipcode} />
        return <div>
            <div>{displayCities}</div>
        </div>
    }
}

export default Zip;
