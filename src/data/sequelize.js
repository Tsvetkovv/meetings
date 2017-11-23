import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('MeetingsReborn', 'app2', 'app2', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    instanceName: 'SQLEXPRESS01',
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
