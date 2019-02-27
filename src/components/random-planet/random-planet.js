import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import PlanetView from './planet-view'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './random-planet.css';
import { clearTimeout } from 'timers';

export default class RandomPlanet extends Component {

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.interval = setTimeout(this.updatePlanet, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  swapiService = new SwapiService();

  updatePlanet = () => {
    console.log(`updatePlanet`);
    const id = Math.floor(Math.random() * 20) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .then(() => {
        this.interval = setTimeout(this.updatePlanet, 5000); 
      })
      .catch(this.onError);
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  }

  onPlanetLoaded = (planet) => {
    console.log(`onPlanetLoaded:`, planet);
    this.setState({ planet, loading: false, error: false });
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMs = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={ planet } /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorMs }
        { spinner }
        { content }
      </div>

    );
  }
}
