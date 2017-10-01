export default {
    port: process.env.PORT,
    db: {
        server: process.env.DB_SERVER,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        debug: process.env.DB_DEBUG,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        }
    },
    session: {
        secret: process.env.SESSION_SECRET,
        maxAge: process.env.SESSION_MAX_AGE,
        httpOnly: true,
        key: process.env.SESSION_KEY
    }
};
