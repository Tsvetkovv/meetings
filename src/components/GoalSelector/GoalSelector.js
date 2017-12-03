import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql } from 'react-apollo';
import Select from 'react-select';
import goalsGql from './goals.graphql';
import s from './GoalSelector.css';

@withStyles(s)
@graphql(goalsGql, {
  name: 'goalsQuery',
  props: ({ goalsQuery: { goals = [], loading } = {} }) => ({
    goals: goals.map(({ id, value }) => ({ value: id, label: value })),
    loading,
  }),
})
class GoalSelector extends React.Component {
  static propTypes = {
    goals: PropTypes.arrayOf(
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
    goals: [],
  };

  render() {
    // TODO: ssr instanceID
    // https://github.com/JedWatson/react-select/issues/1325
    // https://github.com/facebook/react/issues/6451
    return (
      <Select
        {...this.props}
        isLoading={this.props.loading}
        options={this.props.goals}
        searchable={false}
        className={s.root}
      />
    );
  }
}

export default GoalSelector;
