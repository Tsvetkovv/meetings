import CityModel from './city.model';
import cityErrors from './city.errors';
import CityStorage from './city.storage';

export async function read(req, res) {
    const { cityId } = req.params;

    let city;
    try {
        city = await CityStorage.getById(cityId);
    } catch (err) {
        return res.status(500).send(err.message);
    }

    if (!city) {
        return res.status(404).send(cityErrors.notFound);
    }

    return res.json(city);
}

export async function list(req, res) {
    let cities;

    try {
        cities = await CityStorage.getList();
    } catch (err) {
        return res.status(500).send(err.message);
    }

    return res.json(cities);
}
