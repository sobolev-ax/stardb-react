import ItemList from '../item-list';
import { WithData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = new SwapiService();

const PersonList = WithData(ItemList, getAllPeople);
const PlanetList = WithData(ItemList, getAllPlanets);
const StarshipList = WithData(ItemList, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
