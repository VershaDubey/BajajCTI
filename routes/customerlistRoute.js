const express = require('express');
const router = express.Router();
const customerListController = require('../controller/customerListController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, customerListController.createCustomer);
router.get('/', verifyToken, customerListController.getAllCustomers);
router.get('/:id', verifyToken, customerListController.getCustomerById);
router.patch('/:id', verifyToken, customerListController.updateCustomer);
router.delete('/:id', verifyToken, customerListController.deleteCustomer);

module.exports = router;
