import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import PlanetView from './planet-view'
import Spinner from '../spinner'

import './random-planet.css';

export default class RandomPlanet extends Component {

  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  swapiService = new SwapiService();

  updatePlanet() {
    console.log(`updatePlanet`);
    const id = Math.floor(Math.random() * 20) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  };

  onPlanetLoaded = (planet) => {
    console.log(`onPlanetLoaded:`, planet);
    this.setState({ planet, loading: false });
  }

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = loading ? null : <PlanetView planet={ planet } />;

    return (
      <div className="random-planet jumbotron rounded">
        { spinner }
        { content }
      </div>

    );
  }
}
