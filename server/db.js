import sql from 'mssql/msnodesqlv8';
import config from './config/config';

const db = callback => {
    // todo connection pool
    sql.connect(config.db).then(pool => {
        callback(pool);
    });
};

export default db;
