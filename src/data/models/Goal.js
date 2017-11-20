import { DataTypes } from 'sequelize';
import Model from '../sequelize';

const Goal = Model.define('Goal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  value: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
});

export default Goal;
