import SwapiService from './swapi-service';
import localData from './local-data'

export default class DummySwapiService extends SwapiService {

  _local = true;
  _apiBase = undefined;
  _imageBase = 'https://picsum.photos/200/300/?blur';

  async getResource(url) {
    console.log(`getResource: ${url}`);

    return await this._extractLocalData(`${url}`);
  }

  getAllPeople = async () => {
    console.log(`getAllPeople`);
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    console.log(`getPerson: ${id}`);
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    console.log(`getAllPlanets`);
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    console.log(`getPlanet: ${id}`);
    const planet =  await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    console.log(`getAllStarships`);
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    console.log(`getStarship: ${id}`);
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  getImagePerson = ({ id }) => {
    console.log('getImagePerson', id);
    return `${this._imageBase}`
  };

  getImagePlanet = ({ id }) => {
    console.log('getImagePlanet', id);
    return `${this._imageBase}`
  };

  getImageStarship = ({ id }) => {
    console.log('getImagePlanet', id);
    return `${this._imageBase}`
  };

  async _extractLocalData(url) {
    console.log(`extractLocalData:`, url);

    const pathRegExp = /\/(\w+)\/(\d*)\/*/;

    const path = {
      items: url.match(pathRegExp)[1],
      current: url.match(pathRegExp)[2] ? Number(url.match(pathRegExp)[2]) - 1 : undefined,
    };

    const items = localData[path.items];

    return new Promise(function (resolve) {
      let returnedData;

      if (path.current !== undefined) {
        returnedData = Object.assign({}, items[path.current])
      } else {
        returnedData = {
          results: [].concat(items),
        }
      }

      setTimeout(() => {
        resolve(returnedData);
      }, 500);
    });
  }
}