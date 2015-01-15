var db = require('../db/db.js');
var mongoose = require('mongoose');
var q = require('q');

getAll = function () {
  var deferred = q.defer();
  db.project.find({}, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};


function save(project, deferred) {
  project = new db.project(project);
  project.save(function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
}

function update(project, deferred) {
  project = new db.project(project);
  db.project.findByIdAndUpdate(project._id, {
    'name': project.name,
    'description': project.description
  }, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
}

saveProject = function (project) {
  var deferred = q.defer();
  if (project._id) {
    update(project, deferred);
  } else {
    save(project, deferred);
  }
  return deferred.promise;
};

deleteProject = function (id) {
  var deferred = q.defer();
  db.project.findByIdAndRemove({
    '_id': id
  }, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};

getProject = function (id) {
  var deferred = q.defer();
  db.project.findOne({
    '_id': id
  }, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};

module.exports.getAll = getAll;
module.exports.saveProject = saveProject;
module.exports.deleteProject = deleteProject;
module.exports.getProject = getProject;