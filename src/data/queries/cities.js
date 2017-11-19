import { GraphQLList } from 'graphql';
import { City } from '../models';
import CityType from '../types/CityType';

export default {
  type: new GraphQLList(CityType),
  async resolve() {
    return City.findAll();
  },
};
