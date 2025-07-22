const express = require('express');
const router = express.Router();
const roleController = require('../controller/roleController');
const verifyToken = require('../middleware/verifyToken');

// Protected Routes
router.post('/', verifyToken, roleController.createRole);
router.get('/', verifyToken, roleController.getAllRoles);
router.get('/:id', verifyToken, roleController.getRoleById);
router.patch('/:id', verifyToken, roleController.updateRole);
router.delete('/:id', verifyToken, roleController.deleteRole);

module.exports = router;
