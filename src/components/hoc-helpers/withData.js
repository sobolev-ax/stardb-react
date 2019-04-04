import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const WithData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false,
    }
  
    componentDidMount() {
      this.updateComponent();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.getData !== this.props.getData) {
        this.updateComponent();
      }
    }

    updateComponent = () => {
      this.setState({
        loading: true,
      });

      this.props.getData()
        .then(this.onDataLoaded)
        .catch(this.onError)
    }

    onDataLoaded = (data) => {
      console.log('onDataLoaded', data);
      this.setState({
        data,
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
      const { data, loading, error } = this.state;

      const hasData = !(error || loading);
  
      const errorMs = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;

      const itemsList = hasData ? <View {...this.props} data={data} /> : null;

      return (
        <React.Fragment>
          { errorMs }
          { spinner }
          { itemsList }
        </React.Fragment>
      );
    };
  };
};

export default WithData;
