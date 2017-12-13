import sequelize from '../sequelize';
import Profile from './Profile';
import City from './City';
import Goal from './Goal';
import Interest from './Interest';
import Requirement from './Requirement';

Profile.belongsTo(City, {
  foreignKey: 'cityId',
  targetKey: 'id',
});

Profile.belongsTo(Goal, {
  foreignKey: 'goalId',
  targetKey: 'id',
});

Profile.belongsTo(Requirement, {
  foreignKey: 'requirementId',
  targetKey: 'id',
});

Profile.belongsToMany(Interest, {
  through: 'ProfilesInterests',
  foreignKey: 'profileId',
});

Interest.belongsToMany(Requirement, {
  through: 'InterestsRequirements',
  foreignKey: 'interestId',
});

Requirement.belongsToMany(Interest, {
  through: 'InterestsRequirements',
  foreignKey: 'requirementId',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { Profile, City, Goal, Interest, Requirement };
