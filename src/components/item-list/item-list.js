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

  renderItems(items, names = ['name']) {
    console.log('renderItems', items);
    return items.map((item) => {
      return (
        <li key={item.id}
          onClick={() => this.props.onItemSelected(Number(item.id))}
          className="list-group-item">
            {names.map((n) => `${item[n]} `)}
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
    const { listNames } = this.props;

    const hasItems = !(error || loading);

    const errorMs = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const itemsList = hasItems ? this.renderItems(items, listNames) : null;

    return (
      <ul className="item-list list-group">
        { errorMs }
        { spinner }
        { itemsList }
      </ul>
    );
  }
}
