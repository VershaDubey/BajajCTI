
const express = require('express');
const router = express.Router();
const whatsApp_messageController = require('../controller/whatsApp_messageController');
const verifyToken = require('../middleware/verifyToken'); 

router.post('/', verifyToken, whatsApp_messageController.createWhatsapp_message );
router.get('/', verifyToken, whatsApp_messageController.getAllWhatsAppMessage);
router.get('/:id', verifyToken, whatsApp_messageController.getWhatsappMessageById );
router.put('/:id', verifyToken, whatsApp_messageController.updateWhatsappMessage);
router.delete('/:id', verifyToken,whatsApp_messageController.deleteWhatsappMessage);

module.exports = router;
   