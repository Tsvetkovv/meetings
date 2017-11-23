import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import { utc } from 'moment';
import { Sequelize } from 'sequelize';
import User from '../models/User';
import UserType from '../types/UserType';
import ErrorType from '../types/ErrorType';
import { RequirementInputType } from '../types/RequirementType';
import Interest from '../models/Interest';
import Requirement from '../models/Requirement';
import SexType from '../types/SexType';

const Op = Sequelize.Op;

export default {
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    birthday: { type: new GraphQLNonNull(GraphQLString) },
    sex: { type: new GraphQLNonNull(SexType) },
    cityId: { type: new GraphQLNonNull(GraphQLInt) },
    goalId: { type: new GraphQLNonNull(GraphQLInt) },
    requirement: { type: RequirementInputType },
    interestIds: { type: new GraphQLList(GraphQLInt) },
    photoId: { type: GraphQLInt },
  },
  type: UserType,
  async resolve(
    root,
    { name, birthday, sex, cityId, goalId, requirement, photoId, interestIds },
  ) {
    let user;
    // TODO  validate date
    try {
      const dbRequirement =
        requirement && (await Requirement.create(requirement));
      user = await User.create({
        name,
        // birthday: utc(birthday, 'YYYY-MM-DD').format('YYYYMMDD'),
        birthday: utc(birthday, 'YYYY-MM-DD').toDate(),
        sex,
        cityId,
        goalId,
        requirementId: requirement && dbRequirement.id,
        photoId,
      });

      if (interestIds && interestIds.length) {
        const interests = await Interest.findAll({
          where: {
            id: {
              [Op.in]: interestIds,
            },
          },
        });
        await user.setInterests(interests);
      }
    } catch (e) {
      throw new ErrorType([e]);
    }

    return user;
  },
};
