import { DataTypes } from 'sequelize';
import Model from '../sequelize';

const User = Model.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING(255),
  birthday: DataTypes.DATEONLY,
  sex: DataTypes.ENUM('male', 'female'),
  cityId: DataTypes.INTEGER,
  photoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  goalId: DataTypes.INTEGER,
  requirementsId: DataTypes.INTEGER,
});

export default User;
