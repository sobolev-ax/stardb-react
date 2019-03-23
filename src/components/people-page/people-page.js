import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

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

    const itemListPeoples = <ItemList onItemSelected={this.onItemSelected}
                                      getData={this.swapiService.getAllPeople}
                                      renderItems={
                                        ({name, gender, birthYear}) =>
                                          `${name} (${gender} : ${birthYear})`
                                      } />

    const itemListPlanets = <ItemList onItemSelected={this.onItemSelected}
                                      getData={this.swapiService.getAllPlanets}
                                      renderItems={
                                        ({name, diameter, population}) => (
                                          <span>
                                            {name}
                                            <ul>
                                              <li>diameter: {diameter}</li>
                                              <li>population: {population}</li>
                                            </ul>
                                          </span>
                                       )} />

    const itemListStarships = <ItemList onItemSelected={this.onItemSelected}
                                        getData={this.swapiService.getAllStarships} />

    const personDetails = <ErrorBoundry>
      <ItemDetails selectedItem={this.state.selectedItem}
                   getData={getPerson}
                   getImage={getImagePerson} />
    </ErrorBoundry>

    const planetDetails = <ErrorBoundry>
      <ItemDetails selectedItem={2}
                   getData={getPlanet}
                   getImage={getImagePlanet} />
    </ErrorBoundry>

    const starshipDetails = <ErrorBoundry>
      <ItemDetails selectedItem={5}
                  getData={getStarship}
                  getImage={getImageStarship} />
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
