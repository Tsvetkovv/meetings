import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import moment from 'moment';
import ReactTable from 'react-table';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import profilesQuery from './profiles.graphql';
import columnDefinitions from './columnDefinitions';
import s from './Profiles.css';

class Profiles extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    profiles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        birthday: PropTypes.instanceOf(moment).isRequired,
        sex: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        goal: PropTypes.string.isRequired,
        interests: PropTypes.arrayOf(PropTypes.string.isRequired),
      }),
    ),
  };

  static defaultProps = {
    profiles: [],
  };

  render() {
    const { loading, profiles } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Profiles</h1>
          <ReactTable
            loading={loading}
            data={profiles}
            columns={columnDefinitions}
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
  graphql(profilesQuery, {
    props: ({ data: { profiles, loading } }) => ({
      profiles:
        profiles &&
        profiles.map(profile => ({
          ...profile,
          birthday: moment.utc(profile.birthday),
          city: profile.city.name,
          goal: profile.goal.value,
          interests: profile.interests.map(i => i.value),
        })),
      loading,
    }),
  }),
)(Profiles);
