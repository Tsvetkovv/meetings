import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import moment from 'moment';
import ReactTable from 'react-table';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withHandlers, withPropsOnChange, withState } from 'recompose';
import profilesQuery from './profiles.graphql';
import columnDefinitions from './columnDefinitions';
import s from './Profiles.css';
import Link from '../../components/Link';
import ProfileDetails from '../../components/ProfileDetails';

class Profiles extends React.Component {
  static propTypes = {
    toggleFilterPair: PropTypes.func.isRequired,
    isPairHidden: PropTypes.bool.isRequired,
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
        requirement: PropTypes.shape({
          ageAfter: PropTypes.number,
          ageBefore: PropTypes.number,
          sex: PropTypes.string,
        }),
      }),
    ),
  };

  static defaultProps = {
    profiles: [],
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
    const { loading, profiles, isPairHidden, toggleFilterPair } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Profiles</h1>
          <Link to="/addProfile">Add new profile</Link>
          <p>
            <label>
              <input
                type="checkbox"
                checked={isPairHidden}
                onChange={toggleFilterPair}
              />{' '}
              Hide profiles with a partner
            </label>
          </p>
          <ReactTable
            loading={loading}
            data={profiles}
            columns={columnDefinitions}
            filterable
            defaultFilterMethod={this.filterMethod}
            defaultPageSize={10}
            className="-striped -highlight"
            SubComponent={({
              original: { id, interests, name, requirement, partner },
            }) =>
              <ProfileDetails
                id={id}
                name={name}
                interests={interests}
                requirement={requirement}
                partner={partner}
              />}
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
  withPropsOnChange(
    ['profiles', 'isPairHidden'],
    ({ isPairHidden, profiles }) => ({
      profiles: profiles && profiles.filter(p => !isPairHidden || !p.partner),
    }),
  ),
)(Profiles);
