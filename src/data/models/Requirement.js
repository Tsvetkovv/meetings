import { DataTypes } from 'sequelize';
import Model from '../sequelize';
import { AGE, SEX } from '../../constants';

const Requirement = Model.define('Requirement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ageBefore: {
    type: DataTypes.INTEGER,
    validate: {
      min: AGE.min,
      max: AGE.max,
    },
  },
  ageAfter: {
    type: DataTypes.INTEGER,
    validate: {
      min: AGE.min,
      max: AGE.max,
    },
  },
  sex: {
    type: DataTypes.ENUM(SEX.male, SEX.female),
  },
});

export default Requirement;
