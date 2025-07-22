const express = require('express');
const router = express.Router();
const {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin
}= require('../controller/adminController');

const verifyToken = require('../middleware/verifyToken');
  router.post('/', verifyToken, createAdmin);
  router.get('/',verifyToken,getAllAdmins);
  router.get('/:id',verifyToken,getAdminById);
  router.patch('/',verifyToken,updateAdmin);
  router.delete('/' , verifyToken, deleteAdmin);
  
  module.exports = router;
