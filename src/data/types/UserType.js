import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import SexType from './SexType';
import CityType from './CityType';
import GoalType from './GoalType';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    birthday: { type: new GraphQLNonNull(GraphQLString) },
    sex: { type: new GraphQLNonNull(SexType) },
    city: { type: new GraphQLNonNull(CityType) },
    goal: { type: new GraphQLNonNull(GoalType) },
  },
});

export default UserType;
