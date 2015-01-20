'use strict';

var db = require('../db/db.js');
var q = require('q');

function getAll() {
    var deferred = q.defer();
    db.task.find({}, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    }).populate('project');
    return deferred.promise;
}


function save(task, deferred) {
    task = new db.task(task);
    task.save(function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
}

function update(task, deferred) {
    task = new db.task(task);
    db.task.findByIdAndUpdate(task._id, {
        'name': task.name,
        'description': task.description
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
}

function saveTask(task) {
    var deferred = q.defer();
    if (task._id) {
        update(task, deferred);
    } else {
        save(task, deferred);
    }
    return deferred.promise;
}

function deleteTask(id) {
    var deferred = q.defer();
    db.task.findByIdAndRemove({
        '_id': id
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}

function getTask(id) {
    var deferred = q.defer();
    db.task.findOne({
        '_id': id
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    }).populate('project');
    return deferred.promise;
}

function getTasksByProject(id) {
    var deferred = q.defer();
    db.task.find({
        'project': id
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    }).populate('project');
    return deferred.promise;
}

module.exports.getAll = getAll;
module.exports.getTasksByProject = getTasksByProject;
module.exports.saveTask = saveTask;
module.exports.deleteTask = deleteTask;
module.exports.getTask = getTask;