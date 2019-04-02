import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';




const PersonDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getImagePerson }) => {
          return (
            <ItemDetails selectedItem={selectedItem}
                         getData={getPerson}
                         getImage={getImagePerson}>
              <Record label="Gender" field="gender" />
              <Record label="Birth Year" field="birthYear" />
              <Record label="Eye Color" field="EyeColor" />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};
const PlanetDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getImagePlanet }) => {
          return (
            <ItemDetails selectedItem={selectedItem}
                         getData={getPlanet}
                         getImage={getImagePlanet}>
              <Record label="Diameter" field="diameter" />
              <Record label="Population" field="population" />
              <Record label="Period" field="rotationPeriod" />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};
const StarshipDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getImageStarship }) => {
          return (
            <ItemDetails selectedItem={selectedItem}
                         getData={getStarship}
                         getImage={getImageStarship}>
            <Record label="Passengers" field="passengers" />
            <Record label="Length" field="length" />
            <Record label="Cost" field="costInCredits" />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};