import dotenv from 'dotenv'
import path from 'path';

dotenv.config({ path: path.resolve('./server/variables.env') });

if (process.env.NODE_ENV !== 'production') {
    // todo resolve path
    let consts = dotenv.config({ path: path.resolve(`./server/config/env/${process.env.NODE_ENV}.env`) });

    // fixed override variables
    Object.keys(consts).forEach(function (key) {
        process.env[key] = consts[key];
    });
}
