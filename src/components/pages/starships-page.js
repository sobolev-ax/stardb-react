import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import {
  StarshipList,
  StarshipDetails,
} from '../sw-components';

export default class StarshipsPage extends Component{

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
    const itemListStarships = <ErrorBoundry>
      <StarshipList onItemSelected={this.onItemSelected} />
    </ErrorBoundry>

    const starshipDetails = <ErrorBoundry>
      <StarshipDetails selectedItem={this.state.selectedItem} />
    </ErrorBoundry>

    return(
      <Row left={itemListStarships} right={starshipDetails} />
    );
  };
};
