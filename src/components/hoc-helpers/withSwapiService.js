import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const WithSwapiService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            return (
              <Wrapped swapiService={swapiService} {...props} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  }
}

export default WithSwapiService;
