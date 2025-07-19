const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, appointmentController.createAppointment);
router.get('/', verifyToken, appointmentController.getAllAppointments);
router.get('/:id', verifyToken, appointmentController.getAppointmentById);
router.put('/:id', verifyToken, appointmentController.updateAppointment);
router.delete('/:id', verifyToken, appointmentController.deleteAppointment);

module.exports = router;
