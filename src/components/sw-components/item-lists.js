import React from 'react';
import ItemList from '../item-list';
import { WithData, WithChildren } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = new SwapiService();

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

const PersonList = WithData(
  WithChildren(ItemList, RenderPeople),
  getAllPeople
);

const PlanetList = WithData(
  WithChildren(ItemList, RenderPlanet),
  getAllPlanets
);

const StarshipList = WithData(
  WithChildren(ItemList, RenderStarship),
  getAllStarships
);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
