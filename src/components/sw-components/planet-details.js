import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record label="Diameter" field="diameter" />
      <Record label="Population" field="population" />
      <Record label="Period" field="rotationPeriod" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImage: swapiService.getImagePlanet,
  };
};

export default WithSwapiService(mapMethodsToProps)(PlanetDetails);
