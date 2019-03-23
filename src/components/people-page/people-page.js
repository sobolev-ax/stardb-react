import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component{

  swapiService = new SwapiService();

  state = {
    selectedItem: 1,
    hasError: false,
  }

  onItemSelected = (id) => {
    console.log('onItemSelected', id);
    this.setState({
      selectedItem: id,
    });
  };

  componentDidCatch(err) {
    console.warn('componentDidCatch: ', err);
    this.setState({
      hasError: true,
    });
  };

  render() {
    const { hasError } = this.state;

    if (hasError) return <ErrorIndicator />

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

    const personDetails = <PersonDetails selectedItem={this.state.selectedItem}/>

    return(
      <React.Fragment>
        <Row left={itemListPeoples} right={personDetails} />
        <Row left={itemListPlanets} />
        <Row left={itemListStarships} />
        <Row left={<h2>Hello</h2>} right={<h2>World!</h2>} />
      </React.Fragment>
    );
  };
};
