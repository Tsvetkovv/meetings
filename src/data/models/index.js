import sequelize from '../sequelize';
import User from './User';
import City from './City';

User.hasOne(City, {
  foreignKey: 'id',
  targetKey: 'id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, City };
