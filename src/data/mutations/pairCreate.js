import { GraphQLBoolean, GraphQLInt, GraphQLNonNull } from 'graphql';
import Pair from '../models/Pair';

export default {
  args: {
    firstPartnerId: { type: new GraphQLNonNull(GraphQLInt) },
    secondPartnerId: { type: new GraphQLNonNull(GraphQLInt) },
  },
  type: GraphQLBoolean,
  async resolve(root, { firstPartnerId, secondPartnerId }) {
    await Pair.create(firstPartnerId, secondPartnerId, new Date());

    return true;
  },
};
