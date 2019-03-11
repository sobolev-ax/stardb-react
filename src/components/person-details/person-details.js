import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import PersonView from './person-view'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false,
  };

  updatePerson() {
    const { selectedItem } = this.props;

    if(!selectedItem) {
      this.setState({
        loading: false,
        error: false,
      });

      return;
    };

    this.setState({
      loading: true,
      error: false,
    });

    this.swapiService
      .getPerson(selectedItem)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  };

  onPersonLoaded = (person) => {
    console.log(`onPersonLoaded:`, person);
    this.setState({ person, loading: false, error: false });
  }

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    console.warn(prevProps.selectedItem, this.props.selectedItem);
    if (prevProps.selectedItem === this.props.selectedItem) return;

    this.updatePerson();
  };

  render() {
    const { person, loading, error } = this.state;

    const hasData = !(loading || error) && person;
    const hasInstruction = !loading && !error & !hasData;
    const errorMs = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const instruction = hasInstruction ? <span>Select a person from a list</span> : null;
    const content = hasData ? <PersonView person={ person } /> : null ;

    return (
      <div className="person-details card">
        { errorMs }
        { spinner }
        { content }
        { instruction }
      </div>
    )
  }
}
