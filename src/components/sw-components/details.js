import React from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getStarship,
  getPlanet,
  getImagePerson,
  getImageStarship,
  getImagePlanet,
} = new SwapiService();



const PersonDetails = ({ selectedItem }) => {
  return (
    <ItemDetails selectedItem={selectedItem}
                 getData={getPerson}
                 getImage={getImagePerson}>
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye Color" field="EyeColor" />
    </ItemDetails>
  );
};
const PlanetDetails = ({ selectedItem }) => {
  return (
    <ItemDetails selectedItem={selectedItem}
                 getData={getPlanet}
                 getImage={getImagePlanet}>
      <Record label="Diameter" field="diameter" />
      <Record label="Population" field="population" />
      <Record label="Period" field="rotationPeriod" />
    </ItemDetails>
  );
};
const StarshipDetails = ({ selectedItem }) => {
  return (
    <ItemDetails selectedItem={selectedItem}
                 getData={getStarship}
                 getImage={getImageStarship}>
      <Record label="Passengers" field="passengers" />
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};