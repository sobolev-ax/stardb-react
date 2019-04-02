import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ selectedItem, swapiService }) => {

  const { getPlanet, getImagePlanet } = swapiService;

  return (
    <ItemDetails  selectedItem={selectedItem}
                  getData={getPlanet}
                  getImage={getImagePlanet}>
      <Record label="Diameter" field="diameter" />
      <Record label="Population" field="population" />
      <Record label="Period" field="rotationPeriod" />
    </ItemDetails>
  );
};

export default WithSwapiService(PlanetDetails);
