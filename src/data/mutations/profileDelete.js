import { GraphQLInt, GraphQLNonNull, GraphQLBoolean } from 'graphql';
import Profile from '../models/Profile';

export default {
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  type: GraphQLBoolean,
  resolve(root, { id }) {
    // TODO handle 404
    return Profile.destroyById(id);
  },
};
