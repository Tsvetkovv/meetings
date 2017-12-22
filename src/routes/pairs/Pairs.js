import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import moment from 'moment';
import ReactTable from 'react-table';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withHandlers, withPropsOnChange, withState } from 'recompose';
import pairsQuery from './pairs.graphql';
import columnDefinitions from './columnDefinitions';
import s from './Pairs.css';
import ProfilePropType from '../../types/profilePropType';

class Pairs extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    pairs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstPartner: ProfilePropType.isRequired,
        secondPartner: ProfilePropType.isRequired,
        dateStart: PropTypes.instanceOf(moment).isRequired,
        dateEnd: PropTypes.instanceOf(moment),
      }),
    ),
  };

  static defaultProps = {
    pairs: [],
  };

  filterMethod = (filter, row) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id])
          .toLocaleLowerCase()
          .startsWith(filter.value.toLocaleLowerCase())
      : true;
  };

  render() {
    const { loading, pairs } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Pairs</h1>
          <ReactTable
            loading={loading}
            data={pairs}
            columns={columnDefinitions}
            filterable
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
  withState('isPairHidden', 'setFilterPair', false),
  withHandlers({
    toggleFilterPair: ({ setFilterPair, isPairHidden }) => () =>
      setFilterPair(!isPairHidden),
  }),
  graphql(pairsQuery, {
    props: ({ data: { pairs, loading } }) => ({
      pairs:
        pairs &&
        pairs.map(p => ({
          ...p,
          dateStart: p.dateStart && moment.utc(p.dateStart),
          dateEnd: p.dateEnd && moment.utc(p.dateEnd),
        })),
      loading,
    }),
  }),
  withPropsOnChange(['pairs', 'isPairHidden'], ({ isPairHidden, pairs }) => ({
    pairs: pairs && pairs.filter(p => !isPairHidden || !p.partner),
  })),
)(Pairs);
