import React from 'react';

const ItemView= ({ item, image, children }) => {
  const { id, name, gender, birthYear, eyeColor } = item;

  const imageElement = !image ? null :
    <img className="item-image" alt={name} src={image} />

  return (
    <React.Fragment>
        {imageElement}
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(children, (field) => {
                return React.cloneElement(field, { item });
              })
            }
          </ul>
        </div>
    </React.Fragment>
  );
};

export default ItemView;
