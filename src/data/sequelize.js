import { Sequelize } from 'sequelize';

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
