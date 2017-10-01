import BaseModel from '../core/models/base.model';
import bcrypt from 'bcrypt';

export default class UserModel extends BaseModel {
    constructor({
                    id,
                    login,
                    password,
                    accessToken,
                    accessDate,
                    salt,
                    name,
                    birthday,
                    sex,
                    cityId,
                    photoId,
                    goalId,
                    requirementsId
                }) {
        super({ id: id });

        this.login = login;
        this.password = password;
        this.salt = salt;
        this.name = name;
        this.birthday = birthday;
        this.sex = sex;
        this.cityId = cityId;
        this.photoId = photoId;
        this.goalId = goalId;
        this.requirementsId = requirementsId;
    }

    validate() {
        //TODO create module validators
        const errors = [];
        if (!this.login) {
            errors.push({
                field: 'login',
                error: 'Not empty'
            });
        }
        return errors;
    }

    static dataRecordToModel(record) {
        if (!record) {
            return null;
        }
        const {
            id,
            login,
            password,
            salt,
            name,
            birthday,
            sex,
            cityId,
            photoId,
            goalId,
            requirementsId
        } = record;

        return new UserModel({
            id,
            login,
            password,
            salt,
            name,
            birthday,
            sex,
            cityId,
            photoId,
            goalId,
            requirementsId
        })
    }
}
