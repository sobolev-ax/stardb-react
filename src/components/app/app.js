import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage,
} from '../pages';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';
import StarshipDetails from '../sw-components/starship-details';

class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLogged: false,
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

  renderMainPage = () => {
    return <h2>Welcome to StarDB</h2>;
  };

  renderStarhipDetailsPage = ({ match }) => {
    const { id } = match.params;
    return <StarshipDetails selectedItem={id} />
  }

  renderLoginPage = () => {
    const { isLogged } = this.state;

    return <LoginPage isLoggedIn={isLogged} onLogin={() => this.setState({isLogged: true})} />
  }

  renderSecretPage = () => {
    const { isLogged } = this.state;

    return <SecretPage isLoggedIn={isLogged} />
  }

  renderNotFoundPage = () => {
    return <h2>This page is not found...</h2>
  }

  render() {
    return (
      <div className="container">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <Switch>
              <Route path="/" render={this.renderMainPage} exact />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route path="/starships/:id" render={this.renderStarhipDetailsPage} />
              <Route path="/login" render={this.renderLoginPage} />
              <Route path="/secrets" render={this.renderSecretPage} />
              <Route render={this.renderNotFoundPage} />
            </Switch>

          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
};

export default App;