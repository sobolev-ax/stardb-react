import React, { Component } from 'react';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './item-list.css';

export default class ItemList extends Component {

  state = {
    items: null,
    loading: true,
    error: false,
  }

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then(this.onItemsLoaded)
      .catch(this.onError)
  }

  renderItems(items) {
    console.log('renderItems', items);
    const { renderItems } = this.props;

    return items.map((item) => {
      const { id, name } = item;
      return (
        <li key={id}
          onClick={() => this.props.onItemSelected(Number(id))}
          className="list-group-item">
            {renderItems ? renderItems(item) : name}
        </li>
      );
    });
  };

  onItemsLoaded = (items) => {
    console.log('onItemsLoaded', items);
    this.setState({
      items,
      loading: false,
    });
  };

  onError = (err) => {
    console.error('onError:', err);
    this.setState({
      loading: false,
      error: true,
    });
  };

  render() {
    const { items, loading, error } = this.state;

    const hasItems = !(error || loading);

    const errorMs = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const itemsList = hasItems ? this.renderItems(items) : null;

    return (
      <ul className="item-list list-group">
        { errorMs }
        { spinner }
        { itemsList }
      </ul>
    );
  }
}
