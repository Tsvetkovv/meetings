import BaseModel from '../core/models/base.model';

export default class CityModel extends BaseModel {
    constructor({ id, name }) {
        super({ id: id });
        this.name = name;
    }

    validate() {
        const errors = [];
        //TODO create module validators
        if (!this.name) {
            errors.push({
                field: 'name',
                error: 'Not empty'
            });
        }
        return errors;
    }

    static dataRecordToModel(record) {
        if (!record) {
            return null;
        }
        return new CityModel({
            id: record.id,
            name: record.name
        })
    }
}
