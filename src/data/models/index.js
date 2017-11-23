import sequelize from '../sequelize';
import User from './User';
import City from './City';
import Goal from './Goal';
import Interest from './Interest';
import Requirement from './Requirement';

User.belongsTo(City, {
  foreignKey: 'cityId',
  targetKey: 'id',
});

User.belongsToMany(Interest, {
  as: 'interests',
  through: 'UsersInterests',
  foreignKey: 'userId',
});
Interest.belongsToMany(User, {
  as: 'users',
  through: 'UsersInterests',
  foreignKey: 'interestId',
});

Interest.belongsToMany(Requirement, {
  through: 'InterestsRequirements',
  foreignKey: 'interestId',
});
Requirement.belongsToMany(Interest, {
  through: 'InterestsRequirements',
  foreignKey: 'interestId',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, City, Goal, Interest, Requirement };
