'use strict';

export function read(req, res) {
    let storage;
    let dbConn;
    let groupId = req.params.groupId;

    dbConn.connect(function (err) {
        if (err) {
            return res.send(500, err.message);
        }
        storage = new GroupsStorage(dbConn);
        storage.getById(groupId, (err, group) => {
            dbConn.close();
            if (err) {
                return res.send(400, err.message);
            }
            if(!group){
                return res.send(404, groupErrors.notFound);
            }
            res.json(group);
        })
    });
}

export function list(req, res) {
    let storage;
    let dbConn;

    dbConn = dbHelper.getConnection();
    dbConn.connect(function (err) {
        if (err) {
            return res.send(500, err.message);
        }
        storage = new GroupsStorage(dbConn);
        storage.getList(function (err, groups) {
            dbConn.close();
            if (err) {
                return res.send(500, err.message);
            }
            res.json(groups);
        })
    });
}

export function validateGroupId(req, res, next, groupId) {
    groupId = helpers.normalizeId(req.params.groupId);

    if (groupId) {
        next();
    }else{
        res.send(404, groupErrors.notFound);
    }
}
