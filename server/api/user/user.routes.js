import { Router } from 'express';
import { create, list, login, read } from './user.controller';

const router = Router();

export default (app) => {
    router.route('/:userId(\\d+)')
    .get(read);

    router.route('')
    .post(create)
    .get(list);

    router.route('/login')
    .post(login);

    app.use('/api/user', router);
};
