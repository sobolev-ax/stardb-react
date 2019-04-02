import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page'
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <div className="container">
        <SwapiServiceProvider value={this.swapiService}>
          <Header />
          <RandomPlanet />
          <PeoplePage />
        </SwapiServiceProvider>
      </div>
    );
  }
};

export default App;