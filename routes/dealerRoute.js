const express = require('express');
const router = express.Router();
const{
    createDealer,
    getAllDealers,
    getDealerById,
    updateDealer,deleteDealer
} = require('../controller/dealerController');
const verifyToken = require('../middleware/verifyToken');
 router.post('/',verifyToken,createDealer);
router.get('/',verifyToken,getAllDealers);
router.get('/:id',verifyToken,getDealerById);
router.patch('/:id', verifyToken,updateDealer);
router.delete('/:id',verifyToken,deleteDealer);


module.exports = router;