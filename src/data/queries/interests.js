import { GraphQLList } from 'graphql';
import { Interest } from '../models';
import InterestType from '../types/InterestType';

export default {
  type: new GraphQLList(InterestType),
  async resolve() {
    return Interest.findAll();
  },
};
