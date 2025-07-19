const Appointment = require('../model/appointmentmodel');

// Create Appointment
exports.createAppointment = async (req, res) => {
    try {
        const { customer_id, created_by, appointment_date, service_type, status } = req.body;

        const newAppointment = new Appointment({
            customer_id,
            created_by,
            appointment_date,
            service_type,
            status
        });

        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ msg: 'Error creating appointment', error: error.message });
    }
};

// Get All Appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ msg: "Error fetching appointment", error: error.message });
    }
};

// Get Appointment By ID
exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) return res.status(404).json({ msg: 'Appointment not found' });
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching appointment', error: error.message });
    }
};

// Update Appointment
exports.updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!updatedAppointment) return res.status(404).json({ msg: 'Appointment not found' });
        res.json(updatedAppointment);
    } catch (error) {
        res.status(500).json({ msg: 'Error updating appointment', error: error.message });
    }
};

// Delete Appointment
exports.deleteAppointment = async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) return res.status(404).json({ msg: 'Appointment not found' });
        res.json({ msg: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting appointment', error: error.message });
    }
};
