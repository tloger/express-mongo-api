'use strict';

var projectController = require('../controllers/project-controller.js');
var taskController = require('../controllers/task-controller.js');
var trackerController = require('../controllers/tracker-controller.js');
var clientController = require('../controllers/client-controller.js');

module.exports = function(router) {

  router.get('/clients', clientController.getAll);
  router.post('/clients', clientController.saveClient);
  router.put('/clients', clientController.saveClient);
  router.delete('/clients/:id', clientController.deleteClient);
  router.get('/clients/:id', clientController.getClient);

  router.get('/projects', projectController.getAll);
  router.post('/projects', projectController.saveProject);
  router.put('/projects', projectController.saveProject);
  router.delete('/projects/:id', projectController.deleteProject);
  router.get('/projects/:id', projectController.getProject);

  router.get('/projects/:id/tasks', taskController.getTasksByProject);

  router.get('/tasks', taskController.getAll);
  router.post('/tasks', taskController.saveTask);
  router.put('/tasks', taskController.saveTask);
  router.delete('/tasks/:id', taskController.deleteTask);
  router.get('/tasks/:id', taskController.getTask);

  router.get('/tasks/:id/tracker', trackerController.getTrackerByTask);

  router.get('/tracker', trackerController.getAll);
  router.post('/tracker', trackerController.saveTracker);
  router.put('/tracker', trackerController.saveTracker);
  router.delete('/tracker/:id', trackerController.deleteTracker);
  router.get('/tracker/:id', trackerController.getTracker);
};