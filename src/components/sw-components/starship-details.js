import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ selectedItem, swapiService }) => {

  const { getStarship, getImageStarship } = swapiService;

  return (
    <ItemDetails  selectedItem={selectedItem}
                  getData={getStarship}
                  getImage={getImageStarship}>
    <Record label="Passengers" field="passengers" />
    <Record label="Length" field="length" />
    <Record label="Cost" field="costInCredits" />
    </ItemDetails>
  );
};

export default WithSwapiService(StarshipDetails);
