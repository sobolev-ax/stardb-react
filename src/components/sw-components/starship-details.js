import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record label="Passengers" field="passengers" />
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImage: swapiService.getImageStarship,
  };
};

export default WithSwapiService(StarshipDetails, mapMethodsToProps);
