import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql } from 'react-apollo';
import Select from 'react-select';
import interestsGql from './interests.graphql';
import s from './InterestSelector.css';

@withStyles(s)
@graphql(interestsGql, {
  name: 'interestsQuery',
  props: ({ interestsQuery: { interests = [], loading } = {} }) => ({
    interests: interests.map(({ id, value }) => ({ value: id, label: value })),
    loading,
  }),
})
class InterestSelector extends React.Component {
  static propTypes = {
    interests: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string,
      }),
    ),
    loading: PropTypes.bool.isRequired,
    value: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
        label: PropTypes.string,
      }),
    ),
    disabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    interests: [],
  };

  render() {
    // TODO: ssr instanceID
    // https://github.com/JedWatson/react-select/issues/1325
    // https://github.com/facebook/react/issues/6451
    return (
      <Select
        {...this.props}
        isLoading={this.props.loading}
        options={this.props.interests}
        multi
        className={s.root}
      />
    );
  }
}

export default InterestSelector;
