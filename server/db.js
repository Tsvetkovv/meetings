import sql from 'mssql/msnodesqlv8';
import config from './config.json';

export default async callback => {
    const pool  = await sql.connect(config.database);

    callback(pool);
}
