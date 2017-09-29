import sql from 'mssql/msnodesqlv8';
import config from './config/config';

const db = callback => {
    new sql.ConnectionPool(config.db).connect().then(() => {
        callback();
    });
};

export default db;
