import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import ProfileType from './ProfileType';

const PairType = new GraphQLObjectType({
  name: 'Pair',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    firstPartner: { type: new GraphQLNonNull(ProfileType) },
    secondPartner: { type: new GraphQLNonNull(ProfileType) },
    dateStart: { type: new GraphQLNonNull(GraphQLString) },
    dateEnd: { type: GraphQLString },
  },
});

export default PairType;
