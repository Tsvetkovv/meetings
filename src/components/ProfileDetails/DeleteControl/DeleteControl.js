import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { compose, withHandlers } from 'recompose';
import profileDelete from './profileDelete.graphql';
import ProfilesQuery from '../../../routes/profiles/profiles.graphql';

const DeleteControl = ({ id, onDelete }) =>
  <button onClick={() => onDelete(id)}>Delete</button>;

DeleteControl.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default compose(
  graphql(profileDelete, { name: 'profileDeleteMutation' }),
  withHandlers({
    onDelete: ({ profileDeleteMutation }) => id =>
      profileDeleteMutation({
        variables: {
          id,
        },
        optimisticResponse: {
          __typename: 'Mutation',
          profileDelete: true,
        },
        update: store => {
          // Read the data from our cache for this query.
          const data = store.readQuery({ query: ProfilesQuery });
          // Find and remove profile
          data.profiles = data.profiles.filter(p => p.id !== id);
          // Write our data back to the cache.
          store.writeQuery({ query: ProfilesQuery, data });
        },
      }).catch(e => {
        console.error('Error', e);
      }),
  }),
)(DeleteControl);
