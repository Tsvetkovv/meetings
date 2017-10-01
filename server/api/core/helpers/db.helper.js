import sql from 'mssql/msnodesqlv8';
import config from '../../../config/config';

let pool = null;
let connection = null;

export const request = async () => {
    if (!pool.connected) {
        console.log('connecting...');
        connection = await pool.connect();
    }

    const req = new sql.Request(connection);

    return req;
};


export const initDB = () => {
    pool = new sql.ConnectionPool(config.db)
};
