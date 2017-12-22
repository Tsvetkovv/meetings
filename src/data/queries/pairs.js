import { GraphQLList } from 'graphql';
import Pair from '../models/Pair';
import PairType from '../types/PairType';

export default {
  type: new GraphQLList(PairType),
  async resolve() {
    const pairs = await Pair.getAll();

    return pairs;
  },
};
