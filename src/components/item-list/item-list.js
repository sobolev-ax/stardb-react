import React from 'react';
import PropTypes from 'prop-types';

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

ItemList.defaultProps = {
  onItemSelected: () => {console.log('Default function')},
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelected: PropTypes.func,
  children: PropTypes.func.isRequired,
};

export default ItemList;
