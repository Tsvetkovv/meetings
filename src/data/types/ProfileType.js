import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import SexType from './SexType';
import CityType from './CityType';
import GoalType from './GoalType';
import RequirementType from './RequirementType';
import InterestType from './InterestType';

const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    birthday: { type: new GraphQLNonNull(GraphQLString) },
    sex: { type: new GraphQLNonNull(SexType) },
    city: { type: new GraphQLNonNull(CityType) },
    goal: { type: new GraphQLNonNull(GoalType) },
    requirement: { type: RequirementType },
    interests: { type: new GraphQLList(InterestType) },
    photo: { type: GraphQLString },
  },
});

export default ProfileType;
