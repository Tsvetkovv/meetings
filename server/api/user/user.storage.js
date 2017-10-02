import sql, { request } from '../core/helpers/db.helper';
import UserModel from './user.model';
import * as bcrypt from 'bcrypt';
import errors from './user.errors';

export default class UserStorage {
    static async getList() {
        const dbReq = await request();
        const dbRes = await dbReq.execute('UserGetAll');
        const records = dbRes.recordset;

        if (records) {
            return records.map(record => UserModel.dataRecordToModel(record));
        }
    }

    static async getById(id) {
        const dbReq = await request();
        dbReq.input('id', id);
        const dbRes = await dbReq.execute(`UserGet`);
        const record = dbRes.recordset[0];

        return UserModel.dataRecordToModel(record);
    }

    static async getByLogin(login) {
        const dbReq = await request();
        dbReq.input('login', login);
        const dbRes = await dbReq.execute(`UserGet`);
        const record = dbRes.recordset[0];

        return UserModel.dataRecordToModel(record);
    }

    static async create(userModel) {
        const {
            login,
            password,
            accessToken,
            name = 'name_stub',
            birthday = new Date(),
            sex = 1,
            cityId = 3,
            // photoId,
            goalId = 1,
            requirementsId = 1
        } = userModel;
        const saltRounds = 10;

        return await bcrypt.genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt)
            .then(async hash => {
                const output = 'userId';
                const dbReq = await request();
                dbReq.input('password', hash);
                dbReq.input('salt', salt);
                dbReq.input('accessDate', new Date());
                dbReq.input('accessToken', accessToken);

                dbReq.input('login', login);
                dbReq.input('name', name);
                dbReq.input('birthday', birthday);
                dbReq.input('sex', sex);
                dbReq.input('cityId', cityId);
                // dbReq.input('photoId', photoId);
                dbReq.input('goalId', goalId);
                dbReq.input('requirementsId', requirementsId);
                dbReq.output(output, sql.Int);

                const dbRes = await dbReq.execute(`UserCreate`);

                return dbRes.output[output];
            })
        );
    }

    static async checkCredentials(login, password) {
        const user = await UserStorage.getByLogin(login);
        if (!user) {
            throw Error(errors.notFound);
        }
        const hash = user.password;

        if (await bcrypt.compare(password, hash)) {
            return user;
        }
        return null;
    }
}
