import { DataTypes } from 'sequelize';
import Model from '../sequelize';
import Goal from './Goal';
import Interest from './Interest';

const User = Model.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
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
  },
  {
    getterMethods: {
      city() {
        return {
          id: this.City.id,
          name: this.City.name,
        };
      },
    },
  },
);

export default User;
