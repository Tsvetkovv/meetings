import { DataTypes, QueryTypes } from 'sequelize';
import Model from '../sequelize';

const City = Model.define(
  'City',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING(255),
  },
  {},
);

City.findById = id =>
  Model.query('CityGet :id', {
    type: QueryTypes.SELECT,
    replacements: {
      id,
    },
  });
City.findAll = () => Model.query('CityGetAll', { type: QueryTypes.SELECT });

export default City;
