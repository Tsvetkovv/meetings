import path from 'path';
import express from 'express';
import wrench from 'wrench';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compress from 'compression';
import session from 'express-session';
import passport from 'passport';
import config from './config/config';

import { initDB } from './api/core/helpers/db.helper';
// middleware
import cors from './middleware/cors';
import nocache from './middleware/nocache';
import notFound from './middleware/notFound';
import serverError from './middleware/serverError';

const app = express();
app.use(logger('dev')); // TODO: winston https://github.com/winstonjs/winston

// Should be placed before express.static
app.use(compress({
    filter: (req, res) => (/json/).test(res.getHeader('Content-Type')),
    level: 9
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser()); // TODO remove it. For session it is deprecated
app.use(cors);
app.use(nocache);

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.session.secret,
    cookie: {
        maxAge: config.session.maxAge,
        httpOnly: config.session.httpOnly/*,
        secure: config.session.secure && config.secure.ssl*/
    },
    key: config.session.key
    // store -> TODO https://www.npmjs.com/package/connect-mssql
}));

initDB();

wrench.readdirSyncRecursive('./server/api').filter(file => (/\.(routes.js)$/i).test(file)).map(file => {
    require(path.resolve('./server/api', file)).default(app);
});

// index
app.use(/\//, (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('Service web api works!');
});

// error handlers
app.use(notFound);
app.use(serverError);

export default app;
