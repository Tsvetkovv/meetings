import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import moment from 'moment';
import ReactTable from 'react-table';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import usersQuery from './users.graphql';
import columnDefinitions from './columnDefinitions';
import s from './Users.css';

class Users extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(
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
    users: [],
  };

  render() {
    const { loading, users } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Users</h1>
          <ReactTable
            loading={loading}
            data={users}
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
  graphql(usersQuery, {
    props: ({ data: { users, loading } }) => ({
      users:
        users &&
        users.map(user => ({
          ...user,
          birthday: moment.utc(user.birthday),
          city: user.city.name,
          goal: user.goal.value,
          interests: user.interests.map(i => i.value),
        })),
      loading,
    }),
  }),
)(Users);
