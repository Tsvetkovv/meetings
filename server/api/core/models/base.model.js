export default class BaseModel {
    constructor({id = null}){
        this.id = id;
    }

    validate(){
        return [];
    }
}

