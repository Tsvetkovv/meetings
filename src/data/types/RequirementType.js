import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'RequirementType',
  fields: () => ({
    ageBefore: { type: new GraphQLNonNull(GraphQLInt) },
    value: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
