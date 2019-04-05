import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import {
  PlanetList,
  PlanetDetails,
} from '../sw-components';

export default class PlanetsPage extends Component{

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
    const itemListPlanets = <ErrorBoundry>
      <PlanetList onItemSelected={this.onItemSelected} />
    </ErrorBoundry>

    const planetDetails = <ErrorBoundry>
      <PlanetDetails selectedItem={this.state.selectedItem} />
    </ErrorBoundry>

    return(
      <Row left={itemListPlanets} right={planetDetails} />
    );
  };
};
