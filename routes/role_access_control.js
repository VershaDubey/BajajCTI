
const express = require('express');
const router = express.Router();
const role_access_controlController = require('../controller/role_access_controlController');
const verifyToken = require('../middleware/verifyToken'); 

router.post('/', verifyToken, role_access_controlController.createRoleAccessControl );
router.get('/', verifyToken, role_access_controlController.getAllRoleAccessControl);
router.get('/:id', verifyToken, role_access_controlController.getRoleAccessControlById  );
router.put('/:id', verifyToken, role_access_controlController.updateRoleAccessControl);
router.delete('/:id', verifyToken,role_access_controlController.deleteRoleAccessControl);

module.exports = router;
   