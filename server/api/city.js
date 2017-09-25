import resource from 'resource-router-middleware';
import City from '../models/Сity';

export const name = 'city';
export default ({ config, db }) => {
    const city = new City(db);

    return resource({
        id: name,

        async load(req, id, callback) {
            const parsedId = parseInt(id);

            if (isNaN(parsedId)) {
                callback(400);
            } else {
                const result = await city.getById(parsedId);
                callback(null, result)
            }
        },

        /** GET / - List all entities */
        async index({ params }, res) {
            const result = await city.getAll();

            res.json(result);
        },

        /** GET /:id - Return a given entity */
        async read(req, res) {
            const found = req.city;

            if (found) {
                res.json(found)
            } else {
                res.sendStatus(404);
            }
        }
    });
};
