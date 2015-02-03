'use strict';

var db = require('../db/db.js');
var q = require('q');

function getAll() {
  var deferred = q.defer();
  db.client.find({}, function(err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
}

function save(client, deferred) {
  client = new db.client(client);
  client.save(function(err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
}

function update(client, deferred) {
  client = new db.client(client);
  db.client.findByIdAndUpdate(client._id, {
    'name': client.name
  }, function(err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
}

function saveClient(client) {
  var deferred = q.defer();
  if (client._id) {
    update(client, deferred);
  } else {
    save(client, deferred);
  }
  return deferred.promise;
}

function deleteClient(id) {
  var deferred = q.defer();
  db.client.findByIdAndRemove(id, function(err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
}

function getClient(id) {
  var deferred = q.defer();
  db.client.findOne({
    '_id': id
  }, function(err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
}

module.exports.getAll = getAll;
module.exports.saveClient = saveClient;
module.exports.deleteClient = deleteClient;
module.exports.getClient = getClient;