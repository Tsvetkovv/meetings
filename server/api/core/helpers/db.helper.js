import sql from 'mssql/msnodesqlv8';
import config from '../../../config/config';

let pool = null;
let connection = null;

export const request = async () => {
    if (!pool.connected) {
        connection = await pool.connect();
    }

    const req = new sql.Request(connection);

    return req;
};

export default sql;

export const initDB = () => {
    pool = new sql.ConnectionPool(config.db)
};
