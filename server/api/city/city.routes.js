import { Router } from 'express';

const router = Router();

export default (app) => {
    router.route('/city');

    app.use('/api', router);
};
