import { GraphQLList } from 'graphql';
import UserType from '../types/UserType';
import User from '../models/User';
import City from '../models/City';
import Goal from '../models/Goal';
import Interest from '../models/Interest';

export default {
  type: new GraphQLList(UserType),
  async resolve() {
    const users = await User.findAll({
      include: [City, Goal, Interest],
    });

    return users;
  },
};
