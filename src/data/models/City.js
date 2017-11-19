import { DataTypes } from 'sequelize';
import Model from '../sequelize';

const City = Model.define('City', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING(255),
});

export default City;
