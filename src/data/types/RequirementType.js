import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';

const fields = {
  ageBefore: { type: new GraphQLNonNull(GraphQLInt) },
  ageAfter: { type: new GraphQLNonNull(GraphQLInt) },
  sex: { type: new GraphQLNonNull(GraphQLString) },
};

export default new GraphQLObjectType({
  name: 'RequirementType',
  fields: () => fields,
});

export const RequirementInputType = new GraphQLInputObjectType({
  name: 'RequirementInputType',
  fields: () => fields,
});
