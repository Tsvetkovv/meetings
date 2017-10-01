import { Router } from 'express';
import { list, read } from './city.controller';

const router = Router();

export default (app) => {
    router.route('/:cityId(\\d+)')
    .get(read);

    router.route('')
    .get(list);

    app.use('/api/city', router);
};
