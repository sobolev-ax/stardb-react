import React from 'react';
import ItemList from '../item-list';
import { WithData, WithChildren, WithSwapiService } from '../hoc-helpers';

const RenderPeople = ( {name, gender, birthYear} ) => {
  return (<span>{`${name} (${gender} : ${birthYear})`}</span>);
};

const RenderPlanet = ( {name, diameter, population} ) => {
  return (
    <span>
      {name}
      <ul>
        <li>diameter: {diameter}</li>
        <li>population: {population}</li>
      </ul>
    </span>
  );
}

const RenderStarship = ( {name} ) => {
  return `${name}`;
};


const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};


const PersonList = WithSwapiService(mapPersonMethodsToProps)(
                    WithData(
                      WithChildren(RenderPeople)(
                        ItemList)));

const PlanetList = WithSwapiService(mapPlanetMethodsToProps)(
                    WithData(
                      WithChildren(RenderPlanet)(
                        ItemList)));

const StarshipList = WithSwapiService(mapStarshipMethodsToProps)(
                      WithData(
                        WithChildren(RenderStarship)(
                          ItemList)));

export {
  PersonList,
  PlanetList,
  StarshipList,
};
