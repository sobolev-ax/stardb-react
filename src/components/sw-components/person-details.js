import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye Color" field="EyeColor" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImage: swapiService.getImagePerson,
  };
};

export default WithSwapiService(PersonDetails, mapMethodsToProps);
