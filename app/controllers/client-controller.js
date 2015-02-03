'use strict';

var base = require('./base-controller');
var clientService = require('../services/client-service');

function getAll(req, res) {
  clientService.getAll().then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function saveClient(req, res) {
  clientService.saveClient(req.body).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function deleteClient(req, res) {
  clientService.deleteClient(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function getClient(req, res) {
  clientService.getClient(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

module.exports.getAll = getAll;
module.exports.saveClient = saveClient;
module.exports.deleteClient = deleteClient;
module.exports.getClient = getClient;