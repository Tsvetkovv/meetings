import resource from 'resource-router-middleware';
import city from '../models/city';

export const name = 'city';
export default ({ config, db }) => resource({

    /** Property name to store preloaded entity on `request`. */
    id: name,

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
        let facet = facets.find(facet => facet.id === id),
            err = facet ? null : 'Not found';
        callback(err, facet);
    },

    /** GET / - List all entities */
    index({ params }, res) {
        res.json(city);
    }
});
