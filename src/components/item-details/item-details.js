import React, { Component } from 'react';
import ItemView from './item-view'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './item-details.css';

const Record = ({ item, label, field }) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record,
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
    error: false,
    image: null
  };

  updateItem() {
    const { selectedItem, getData } = this.props;

    if(!selectedItem) {
      this.setState({
        loading: false,
        error: false,
        item: null,
      });

      return;
    };

    this.setState({
      loading: true,
      error: false,
    });

    getData(selectedItem)
      .then(this.onItemLoaded)
      .catch(this.onError);
  };

  onItemLoaded = (item) => {
    console.log(`onItemLoaded:`, item);
    const { getImage } = this.props;

    this.setState({
      item,
      loading: false,
      error: false,
      image: getImage(item),
    });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem ||
        prevProps.getData !== this.props.getData) {
      this.updateItem();
    }
  };

  render() {
    const { item, loading, error, image } = this.state;

    const hasData = !(loading || error) && item;
    const hasInstruction = !loading && !error & !hasData;
    const errorMs = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const instruction = hasInstruction ? <span>Select a item from a list</span> : null;
    const content = hasData ? <ItemView
      item={ item }
      image={image}>
        { this.props.children }
      </ItemView> : null;

    return (
      <div className="item-details card">
        { errorMs }
        { spinner }
        { content }
        { instruction }
      </div>
    )
  }
}
