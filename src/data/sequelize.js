import { Sequelize, DataTypes } from 'sequelize';
import { db } from '../config';

const sequelize = new Sequelize(db.table, db.login, db.password, {
  host: db.url,
  dialect: 'mssql',
  dialectOptions: {
    instanceName: db.instanceName,
    encrypt: db.encrypt,
  },
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  // eslint-disable-next-line no-console
  logging: console.log,
});

export default sequelize;

// SEQUELIZE FIX https://github.com/sequelize/sequelize/issues/7930
// eslint-disable-next-line no-underscore-dangle
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
  // eslint-disable-next-line no-param-reassign,no-underscore-dangle
  date = this._applyTimezone(date, options);

  // Z here means current timezone, _not_ UTC
  // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
  return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};
