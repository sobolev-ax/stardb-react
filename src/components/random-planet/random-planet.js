import React, { Component } from 'react';
import propTypes from 'prop-types';

import PlanetView from './planet-view'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import {
  Compose,
  WithSwapiService,
} from '../hoc-helpers';

import './random-planet.css';
import { clearTimeout } from 'timers';

class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000,
  };

  static propTypes = {
    updateInterval: propTypes.number,
  };

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: true, error: false });
    this.interval = setTimeout(this.updatePlanet, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  updatePlanet = () => {
    console.log(`updatePlanet`);
    const id = Math.floor(Math.random() * 8) + 2;
    const { updateInterval, getData } = this.props;

    getData(id)
      .then(this.onPlanetLoaded)
      .then(() => {
        this.interval = setTimeout(this.updatePlanet, updateInterval); 
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

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
  };
};

export default Compose(
  WithSwapiService(mapPlanetMethodsToProps),
)(RandomPlanet);
