import { GraphQLList } from 'graphql';
import { Goal } from '../models';
import GoalType from '../types/GoalType';

export default {
  type: new GraphQLList(GoalType),
  async resolve() {
    return Goal.findAll();
  },
};
