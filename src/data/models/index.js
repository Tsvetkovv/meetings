import sequelize from '../sequelize';
import User from './User';
import City from './City';
import Goal from './Goal';
import Interest from './Interest';
import Requirement from './Requirement';

User.belongsToMany(Interest, { through: 'UsersInterests' });
Interest.belongsToMany(User, { through: 'UsersInterests' });

Interest.belongsToMany(Requirement, { through: 'InterestsRequirements' });
Requirement.belongsToMany(Interest, { through: 'InterestsRequirements' });

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, City, Goal, Interest, Requirement };
