const Call_log = require('../model/call_logmodel');

exports.createCall_log = async (req, res) => {
    try {
        const { customer_id, user_id, type, timestamp, duration, call_status, notes, call_recording, status } = req.body;
        const newCall_log = new Call_log({ customer_id, user_id, type, timestamp, duration, call_status, notes, call_recording, status });
        await newCall_log.save(); 
        res.status(201).json(newCall_log);
    } catch (error) {
        res.status(500).json({ msg: 'Error creating calllog', error: error.message });
    }
};

exports.getAllCall_log = async (req, res) => {
    try {
        const call_logs = await Call_log.find();
        res.json(call_logs);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching call_logs', error: error.message });
    }
};

exports.getCall_logById = async (req, res) => {
    try {
        const call_log = await Call_log.findById(req.params.id);
        if (!call_log) return res.status(404).json({ msg: 'Call_log not found' });
        res.json(call_log);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching call_log', error: error.message });
    }
};

exports.updateCall_log = async (req, res) => {
    try {
        const updateCall_log = await Call_log.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!updateCall_log) return res.status(404).json({ msg: 'Call_log not found' });
        res.json(updateCall_log);
    } catch (error) {
        res.status(500).json({ msg: 'Error updating call_log', error: error.message });
    }
};

exports.deleteCall_log = async (req, res) => {
    try {
        const deleteCall_log = await Call_log.findByIdAndDelete(req.params.id);
        if (!deleteCall_log) return res.status(404).json({ msg: 'Call not found' });
        res.json({ msg: 'Call_log deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting call_log', error: error.message });
    }
};
