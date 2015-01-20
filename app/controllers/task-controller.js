'use strict';

var base = require('./base-controller');
var taskService = require('../services/task-service');
var projectService = require('../services/project-service');
var trackerService = require('../services/tracker-service');

function getAll(req, res) {
    taskService.getAll().then(function (data) {
        res.json(base.sendSuccess(data));
    }, function (err) {
        res.json(base.sendError(err));
    });
}

function saveTask(req, res) {
    taskService.saveTask(req.body).then(function (data) {
        res.json(base.sendSuccess(data));
    }, function (err) {
        res.json(base.sendError(err));
    });
}

function validateAndSaveTask(req, res) {
    projectService.getProject(req.body.project).then(function (data) {
        if (data !== null) {
            saveTask(req, res);
        } else {
            var err = 'Project not found';
            res.json(base.sendError(err));
        }
    });
}

function deleteTask(req, res) {
    taskService.deleteTask(req.params.id).then(function (data) {
        res.json(base.sendSuccess(data));
    }, function (err) {
        res.json(base.sendError(err));
    });
}

function validateAndDeleteTask(req, res) {
    trackerService.getTrackerByTask(req.params.id).then(function (data) {
        if (data.data.length === 0) {
            deleteTask(req, res);
        } else {
            var err = 'Please delete all the tracker before deleting task';
            res.json(base.sendError(err));
        }
    }, function (err) {
        res.json(base.sendError(err));
    });

    taskService.deleteTask(req.params.id).then(function (data) {
        res.json(base.sendSuccess(data));
    }, function (err) {
        res.json(base.sendError(err));
    });
}

function getTask(req, res) {
    taskService.getTask(req.params.id).then(function (data) {
        res.json(base.sendSuccess(data));
    }, function (err) {
        res.json(base.sendError(err));
    });
}


function getTasksByProject(req, res) {
    taskService.getTasksByProject(req.params.id).then(function (data) {
        res.json(base.sendSuccess(data));
    }, function (err) {
        res.json(base.sendError(err));
    });
}

module.exports.getAll = getAll;
module.exports.saveTask = validateAndSaveTask;
module.exports.deleteTask = validateAndDeleteTask;
module.exports.getTask = getTask;
module.exports.getTasksByProject = getTasksByProject;