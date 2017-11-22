import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'RequirementType',
  fields: () => ({
    ageBefore: { type: new GraphQLNonNull(GraphQLInt) },
    value: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export const RequirementInputType = new GraphQLInputObjectType({
  name: 'RequirementType',
  fields: () => ({
    ageBefore: { type: new GraphQLNonNull(GraphQLInt) },
    value: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
