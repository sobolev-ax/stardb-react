import React, { Component } from 'react';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import {
  PersonList,
  PlanetList,
  StarshipList,
} from '../sw-components';

import './people-page.css';

export default class PeoplePage extends Component{

  swapiService = new SwapiService();

  state = {
    selectedItem: 1,
  }

  onItemSelected = (id) => {
    console.log('onItemSelected', id);
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { getPerson,
            getImagePerson,
            getPlanet,
            getImagePlanet,
            getStarship,
            getImageStarship,
          } = this.swapiService;

    const itemListPeoples =
    <PersonList onItemSelected={this.onItemSelected}>
      {( {name, gender, birthYear} ) => {
        return `${name} (${gender} : ${birthYear})`;
      }}
    </PersonList>

    const itemListPlanets =
    <PlanetList onItemSelected={this.onItemSelected}>
      {( {name, diameter, population} ) => {
        return (
          <span>
            {name}
            <ul>
              <li>diameter: {diameter}</li>
              <li>population: {population}</li>
            </ul>
          </span>
        );
      }}
    </PlanetList>

    const itemListStarships =
    <StarshipList onItemSelected={this.onItemSelected}>
      { ({ name }) => <span>{ name }</span> }
    </StarshipList>

    const personDetails = <ErrorBoundry>
      <ItemDetails selectedItem={this.state.selectedItem}
                   getData={getPerson}
                   getImage={getImagePerson}>
        <Record label="Gender" field="gender" />
        <Record label="Birth Year" field="birthYear" />
        <Record label="Eye Color" field="EyeColor" />
      </ItemDetails>
    </ErrorBoundry>

    const planetDetails = <ErrorBoundry>
      <ItemDetails selectedItem={2}
                   getData={getPlanet}
                   getImage={getImagePlanet}>
        <Record label="Diameter" field="diameter" />
        <Record label="Population" field="population" />
        <Record label="Period" field="rotationPeriod" />
      </ItemDetails>
    </ErrorBoundry>

    const starshipDetails = <ErrorBoundry>
      <ItemDetails selectedItem={5}
                  getData={getStarship}
                  getImage={getImageStarship}>
        <Record label="Passengers" field="passengers" />
        <Record label="Length" field="length" />
        <Record label="Cost" field="costInCredits" />
      </ItemDetails>
    </ErrorBoundry>

    return(
      <ErrorBoundry>
        <Row left={itemListPeoples} right={personDetails} />
        <Row left={itemListPlanets} right={planetDetails} />
        <Row left={itemListStarships} right={starshipDetails} />
        <Row left={<h2>Hello</h2>} right={<h2>World!</h2>} />
      </ErrorBoundry>
    );
  };
};
