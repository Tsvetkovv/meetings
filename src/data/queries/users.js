import { GraphQLList } from 'graphql';
import { User } from '../models';
import UserType from '../types/UserType';
import City from '../models/City';

export default {
  type: new GraphQLList(UserType),
  async resolve() {
    const users = await User.findAll({
      include: [City],
    });

    return users;
  },
};
