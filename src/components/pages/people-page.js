import React from 'react';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import {
  PersonList,
  PersonDetails,
} from '../sw-components';

const PeoplePage = ({ match, history }) => {

  const onItemSelected = (id) => {
    console.log('onItemSelected', id);
    history.push( String(id) );
  };

  const { id } = match.params;


  const itemListPeoples = <ErrorBoundry>
    <PersonList onItemSelected={onItemSelected} />
  </ErrorBoundry>

  const personDetails = <ErrorBoundry>
    <PersonDetails selectedItem={id} />
  </ErrorBoundry>

  return(
    <Row left={itemListPeoples} right={personDetails} />
  );
};

export default PeoplePage;
