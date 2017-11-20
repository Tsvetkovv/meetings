import { DataTypes } from 'sequelize';
import Model from '../sequelize';
import { SEX } from '../../constants/index';

const Requirement = Model.define('Requirement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
  sex: {
    type: DataTypes.ENUM(SEX.male, SEX.female),
    allowNull: false,
  },
});

export default Requirement;
