import { GraphQLInt, GraphQLNonNull } from 'graphql';
import { City } from '../models';
import CityType from '../types/CityType';

const me = {
  type: CityType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(_, { id }) {
    const city = await City.findById(id);

    return city;
  },
};

export default me;
