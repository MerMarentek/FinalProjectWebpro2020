import React from 'react';
import { Cards, CountryPicker } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import Prov from './prov'

import image from './images/covid-19.jpg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country} = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        {/* <Global dataN={data} /> */}
        <h3>Pilih Global / Negara : </h3>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <h3>Negara : {country}</h3>
        <Cards data={data}/>
        {/* // <Chart data={data} country={country} />  */}
        <table className="table table-bordered">
          <thead className="thead-dark">
        <Prov/></thead>
        </table>
        
      </div>
    );
  }
}

export default App;