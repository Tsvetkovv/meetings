import { DataTypes } from 'sequelize';
import Model from '../sequelize';
import City from './City';

const Requirement = Model.define('Requirement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cityId: {
    type: DataTypes.INTEGER,
    references: {
      model: City,
      key: 'id',
    },
  },
  ageBefore: {
    type: DataTypes.INTEGER,
    validate: {
      min: 16,
      max: 120,
    },
  },
  ageAfter: {
    type: DataTypes.INTEGER,
    validate: {
      min: 16,
      max: 120,
    },
  },
});

export default Requirement;
