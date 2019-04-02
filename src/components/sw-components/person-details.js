import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { WithSwapiService } from '../hoc-helpers';

const PersonDetails = ({ selectedItem, swapiService }) => {

  const { getPerson, getImagePerson } = swapiService;

  return (
    <ItemDetails  selectedItem={selectedItem}
                  getData={getPerson}
                  getImage={getImagePerson}>
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye Color" field="EyeColor" />
    </ItemDetails>
  );
};

export default WithSwapiService(PersonDetails);
