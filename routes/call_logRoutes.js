const express  = require('express');
const router = express.Router();
const call_logController  = require('../controller/call_logController');
const verifyToken = require('../middleware/verifyToken');
 

 router.post('/' , verifyToken, call_logController.createCall_log );
 router.get('/', verifyToken , call_logController.getAllCall_log);
 router.get('/:id', verifyToken , call_logController.getCall_logById);
 router.put('/:id',verifyToken, call_logController.updateCall_log);
 router.delete('/:id',verifyToken,call_logController.deleteCall_log);

 module.exports = router;