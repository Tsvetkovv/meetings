import { request } from '../core/helpers/db.helper';
import CityModel from './city.model';
import cityErrors from './city.errors';

export async function read(req, res) {
    const { cityId } = req.params;

    let record;
    try {
        const dbReq = await request();
        const dbRes = await dbReq.execute(`CityGet ${cityId}`);

        record = dbRes.recordset[0];
    } catch (err) {
        return res.status(500).send(err.message);
    }

    const city = CityModel.dataRecordToModel(record);

    if (!city) {
        return res.status(404).send(cityErrors.notFound);
    }

    return res.json(city);
}

export async function list(req, res) {
    let cities;

    try {
        const dbReq = await request();
        const dbRes = await dbReq.execute('CityGetAll');
        const records = dbRes.recordset;

        if (records) {
            cities = records.map(record => CityModel.dataRecordToModel(record));
        }
    } catch (err) {
        return res.status(500).send(err.message);
    }

    return res.json(cities);
}
