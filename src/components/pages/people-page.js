import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import {
  PersonList,
  PersonDetails,
} from '../sw-components';

export default class PeoplePage extends Component{

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
    const itemListPeoples = <ErrorBoundry>
      <PersonList onItemSelected={this.onItemSelected} />
    </ErrorBoundry>

    const personDetails = <ErrorBoundry>
      <PersonDetails selectedItem={this.state.selectedItem} />
    </ErrorBoundry>

    return(
      <Row left={itemListPeoples} right={personDetails} />
    );
  };
};
