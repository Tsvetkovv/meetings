import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLInputObjectType,
} from 'graphql';
import SexType from './SexType';

const fields = {
  ageBefore: { type: new GraphQLNonNull(GraphQLInt) },
  ageAfter: { type: new GraphQLNonNull(GraphQLInt) },
  sex: { type: SexType },
};

export default new GraphQLObjectType({
  name: 'RequirementType',
  fields: () => fields,
});

export const RequirementInputType = new GraphQLInputObjectType({
  name: 'RequirementInputType',
  fields: () => fields,
});
