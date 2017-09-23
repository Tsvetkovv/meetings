import resource from 'resource-router-middleware';
import city from '../models/city';

export const name = 'city';
export default ({ config, db }) => resource({

    /** Property name to store preloaded entity on `request`. */
    id: name,

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    async load(req, id, callback) {
        const result = await db.request().execute(`CityGet ${id}`);
        const err = result ? null : 'Not found';

        callback(err, result);
    },

    /** GET / - List all entities */
    async index({ params }, res) {
        const result = await db.request().execute(`CityGetAll`);

        res.json(result.recordsets);
    },

    /** GET /:id - Return a given entity */
    async read({ city }, res) {
        const found = city.recordset[0];

        if (found) {
            res.json(found)
        } else {
            res.sendStatus(404);
        }

    },
});
