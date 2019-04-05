import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

class App extends Component {

  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    console.log('onServiceChange');

    this.setState(({ swapiService: { _local } }) => {
      const Service = _local ? SwapiService : DummySwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <div className="container">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange} />
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </SwapiServiceProvider>
      </div>
    );
  }
};

export default App;