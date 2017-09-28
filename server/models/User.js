import BaseModel from './BaseModel';

const salt = 'azazaza';

export default class User extends BaseModel {
    constructor({
                    login,
                    password,
                    name,
                    birthday,
                    sex,
                    cityId,
                    photoId,
                    goalId,
                    requirementsId
                }, db) {
        super(db);

        this.login = login;
        this.password = password;
        this.name = name;
        this.birthday = birthday;
        this.sex = sex;
        this.cityId = cityId;
        this.photoId = photoId;
        this.goalId = goalId;
        this.requirementsId = requirementsId;
        this.salt = salt;

    };

    static async getUserByToken(token) {
        return null; // TODO
    }

    static async findById(id) {
        return true; // TODO
    }

    static async createUser({
                                login,
                                password,
                                name,
                                birthday,
                                sex,
                                cityId,
                                photoId,
                                goalId,
                                requirementsId
                            }) {
        const userParams = { ...arguments[0] };

        const user = new User();

        return (await this.db.request().execute(`UserCreate ${id}`)).recordset[0];
    }
}
