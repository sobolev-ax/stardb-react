import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';
import StarshipDetails from '../sw-components/starship-details';

class App extends Component {

  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    console.log('onServiceChange');

    this.setState(({ swapiService: { _local } }) => {
      const Service = _local ? SwapiService : DummySwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <div className="container">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <Route
              path="/"
              render={() => <h2>Welcome to StarDB</h2>}
              exact />
            
            <Route path="/people" render={() => <h2>People</h2>} />
            <Route path="/people/:id?" component={PeoplePage} />

            <Route path="/planets" render={() => <h2>Planets</h2>} />
            <Route path="/planets" component={PlanetsPage} />

            <Route path="/starships" render={() => <h2>Starships</h2>} />
            <Route path="/starships" component={StarshipsPage} exact />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails selectedItem={id} />
              }} />

          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
};

export default App;