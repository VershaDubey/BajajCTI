// routes/dealershipRoutes.js
const express = require('express');
const router = express.Router();
const dealershipController = require('../controller/dealershipController');
const verifyToken = require('../middleware/verifyToken'); 

router.post('/', verifyToken, dealershipController.createDealership);
router.get('/', verifyToken, dealershipController.getAllDealerships);
router.get('/:id', verifyToken, dealershipController.getDealershipById);
router.put('/:id', verifyToken, dealershipController.updateDealership);
router.delete('/:id', verifyToken, dealershipController.deleteDealership);

module.exports = router;
   