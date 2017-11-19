import { DataTypes } from 'sequelize';
import Model from '../sequelize';
import City from './City';
import Goal from './Goal';
import Interest from './Interest';

const User = Model.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING(255),
  birthday: {
    type: DataTypes.DATE,
    validate: {
      isDate: true,
    },
  },
  sex: DataTypes.ENUM('male', 'female'),
  cityId: {
    type: DataTypes.INTEGER,
    references: {
      model: City,
      key: 'id',
    },
  },
  photoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  goalId: {
    type: DataTypes.INTEGER,
    references: {
      model: Goal,
      key: 'id',
    },
  },
  requirementId: {
    type: DataTypes.INTEGER,
    references: {
      model: Interest,
      key: 'id',
    },
  },
});

export default User;
