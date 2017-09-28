import path from 'path';
import initializeDb from './db';
import express from 'express';
import wrench from 'wrench';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import methodOverride from 'method-override';
import compress from 'compression';
import session from 'express-session';
import passport from 'passport';
import config from './config/config';

// middleware
import cors from './middleware/cors';
import nocache from './middleware/nocache';
import notFound from './middleware/notFound';
import serverError from './middleware/serverError';

const app = express();
app.use(logger('dev'));

// connect to db
initializeDb(db => {
    // internal middleware
    // app.use(middleware({ config, db }));

    // api router
    // app.use('/api', api({ config, db }));

    app.server.listen(config.port, () => {
        console.log(`Started on port ${app.server.address().port}`);
    });
});

export default app;
