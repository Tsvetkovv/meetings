import { GraphQLEnumType } from 'graphql';
import { SEX } from '../../constants';

export default new GraphQLEnumType({
  name: 'Sex',
  values: {
    [SEX.male]: { value: SEX.male },
    [SEX.female]: { value: SEX.female },
  },
});
