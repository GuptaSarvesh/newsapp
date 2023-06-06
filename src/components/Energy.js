import React, { Component } from 'react';
import axios from 'axios';

class Energy extends Component {

  state = {
    fuel: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/today/india/rajasthan/jaipur',
        headers: {
          'X-RapidAPI-Key': 'b2058776dcmsh19dd40073487419p138abajsn5b6d59e33611',
          'X-RapidAPI-Host': 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      const fuelData = response.data;

      this.setState({ fuel: fuelData });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { fuel } = this.state;

    return (
      <div className="card">
      {fuel ? (
        <div>
          <h2>{fuel.cityName}</h2>
          <p>
            <strong>Location:</strong> {fuel.stateName}, {fuel.countryName}
          </p>
          <div className="fuel-prices d-flex justify-content-between">
            <div className="fuel-price">
              <h3>Petrol Price</h3>
              <p>{fuel.fuel.petrol.retailPrice}</p>
            </div>
            <div className="fuel-price">
              <h3>Diesel Price</h3>
              <p>{fuel.fuel.diesel.retailPrice}</p>
            </div>
            <div className="fuel-price">
              <h3>LPG Price</h3>
              <p>{fuel.fuel.lpg.retailPrice}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
    
    );
  }
}

export default Energy;
