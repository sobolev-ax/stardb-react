import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components';

import './people-page.css';

export default class PeoplePage extends Component{

  swapiService = new SwapiService();

  state = {
    selectedItem: 5,
  }

  onItemSelected = (id) => {
    console.log('onItemSelected', id);
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const itemListPeoples = <PersonList
      onItemSelected={this.onItemSelected} />

    const itemListPlanets = <PlanetList
      onItemSelected={this.onItemSelected} />

    const itemListStarships = <StarshipList
      onItemSelected={this.onItemSelected} />

    const personDetails = <ErrorBoundry>
      <PersonDetails selectedItem={this.state.selectedItem} />
    </ErrorBoundry>

    const planetDetails = <ErrorBoundry>
      <PlanetDetails selectedItem={5} />
    </ErrorBoundry>

    const starshipDetails = <ErrorBoundry>
      <StarshipDetails selectedItem={5} />
    </ErrorBoundry>

    return(
      <ErrorBoundry>
        <Row left={itemListPeoples} right={personDetails} />
        <Row left={itemListPlanets} right={planetDetails} />
        <Row left={itemListStarships} right={starshipDetails} />
      </ErrorBoundry>
    );
  };
};
