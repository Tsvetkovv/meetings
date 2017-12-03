import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql } from 'react-apollo';
import Select from 'react-select';
import citiesGql from './cities.graphql';
import s from './CitySelector.css';

@withStyles(s)
@graphql(citiesGql, {
  name: 'citiesQuery',
  props: ({ citiesQuery: { cities = [], loading } = {} }) => ({
    cities: cities.map(({ id, name }) => ({ value: id, label: name })),
    loading,
  }),
})
class CitySelector extends React.Component {
  static propTypes = {
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string,
      }),
    ),
    loading: PropTypes.bool.isRequired,
    value: PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    }),
    disabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    cities: [],
  };

  render() {
    // TODO: ssr instanceID
    // https://github.com/JedWatson/react-select/issues/1325
    // https://github.com/facebook/react/issues/6451
    return (
      <Select
        {...this.props}
        isLoading={this.props.loading}
        options={this.props.cities}
        className={s.root}
      />
    );
  }
}

export default CitySelector;
