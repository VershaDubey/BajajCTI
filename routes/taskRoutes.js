
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // token check middleware
const taskController = require('../controller/taskController'); // task controller import

router.post('/', verifyToken, taskController.createTask);       //  create Task
router.get('/', verifyToken, taskController.getTasks);          //  get All Tasks
router.get('/:id', verifyToken, taskController.getTaskById);    //  get Single Task
router.put('/:id', verifyToken, taskController.updateTask);     //  update Task
router.delete('/:id', verifyToken, taskController.deleteTask);  //  delete Task

module.exports = router;
