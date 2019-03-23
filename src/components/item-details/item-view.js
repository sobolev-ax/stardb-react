import React from 'react';

const ItemView= ({ item, image }) => {
  const { id, name, gender, birthYear, eyeColor } = item;

  const imageElement = !image ? null :
    <img className="item-image" alt={name} src={image} />

  return (
    <React.Fragment>
        {imageElement}
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
};

export default ItemView;
