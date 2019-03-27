import React from 'react';

import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  console.log('renderLabel', data);

  const items = data.map((item) => {
    const { id, name } = item;
    return (
      <li key={id}
        onClick={() => onItemSelected(Number(id))}
        className="list-group-item">
          {renderLabel ? renderLabel(item) : name}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
}

export default ItemList;
