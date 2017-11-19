import { DataTypes } from 'sequelize';
import Model from '../sequelize';

const Interest = Model.define('Interest', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  value: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

export default Interest;
