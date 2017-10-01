import { request } from '../core/helpers/db.helper';
import CityModel from './city.model';

export default class CityStorage {
    static async getList() {
        const dbReq = await request();
        const dbRes = await dbReq.execute('CityGetAll');
        const records = dbRes.recordset;

        if (records) {
            return records.map(record => CityModel.dataRecordToModel(record));
        }
    }

    static async getById(id) {
        const dbReq = await request();
        dbReq.input('id', id);
        const dbRes = await dbReq.execute(`CityGet`);
        const record = dbRes.recordset[0];

        return CityModel.dataRecordToModel(record);
    }
}
