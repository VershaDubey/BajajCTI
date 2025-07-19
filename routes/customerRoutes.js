const express = require('express');
 const router = express.Router();
 const customerController = require('../controller/customerController');
 const verifyToken  = require('../middleware/verifyToken');

 router.post('/', verifyToken, customerController.createCustomer );
 router.get('/', verifyToken, customerController.getAllCustomer);
 router.get('/:id',verifyToken, customerController.getCustomerById);
 router.put('/:id', verifyToken,customerController.updateCustomer);
 router.delete('/:id', verifyToken,customerController.deleteCustomer);


 module.exports = router;