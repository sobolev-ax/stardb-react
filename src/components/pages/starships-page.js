import React from 'react';

import {
  StarshipList,
} from '../sw-components';

const StarshipsPage = ({ history }) => {

  const onItemSelected = (id) => {
    console.log('onItemSelected', id);
    history.push(`/starships/${id}`);
  };


  return(
    <StarshipList onItemSelected={onItemSelected} />
  );
};

export default StarshipsPage;
