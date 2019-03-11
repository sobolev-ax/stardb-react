import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator'

import './people-page.css';

export default class PeoplePage extends Component{
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
     
    return(
      <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItem={this.state.selectedItem}/>
          </div>
      </div>
    );
  };
};
