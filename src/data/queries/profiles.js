import { GraphQLList } from 'graphql';
import ProfileType from '../types/ProfileType';
import Profile from '../models/Profile';
import City from '../models/City';
import Goal from '../models/Goal';
import Interest from '../models/Interest';
import Requirement from '../models/Requirement';

export default {
  type: new GraphQLList(ProfileType),
  async resolve() {
    const profiles = await Profile.findAll({
      include: [City, Goal, Interest, Requirement],
    });

    return profiles;
  },
};
