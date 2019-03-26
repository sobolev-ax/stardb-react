import React from 'react';
import { WithData } from '../hoc-helpers';

import './item-list.css';

const ItemList = (props) => {

  const { data, renderItems, onItemSelected } = props;

  console.log('renderItems', data);

  const items = data.map((item) => {
    const { id, name } = item;
    return (
      <li key={id}
        onClick={() => onItemSelected(Number(id))}
        className="list-group-item">
          {renderItems ? renderItems(item) : name}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
}

export default WithData(ItemList);
