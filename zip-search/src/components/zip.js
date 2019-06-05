import React, { Component } from 'react';
import axios from 'axios';

class Zip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetZipcode: props.zipcode,
            allCities: []
        }
    }

    async fetchCitiesFromZipcode() {
        try {
            let { data } = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.targetZipcode}`);
            this.setState({ allCities: data });
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        let displayCities = this.state.allCities.map(city => (
            <div>
                <div>{city.City}</div>
                <div>State: {city.State}</div>
                <div>Location: ({city.Lat}, {city.Long})</div>
                <div>Population (estimated): {city.EstimatedPopulation}</div>
                <div>Total Wages: {city.TotalWages}</div>
            </div>
        ));
        return <div>
            <div>{displayCities}</div>
        </div>
    }
}

export default Zip;