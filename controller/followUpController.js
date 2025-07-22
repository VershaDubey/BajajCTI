const FollowUp = require('../model/followupmodel');

// Create follow-up
const createFollowUp = async (req, res) => {
  try {
    const followUp = new FollowUp(req.body);
    await followUp.save();
    res.status(201).json({ msg: 'Follow-up created successfully', followUp });
  } catch (error) {
    res.status(500).json({ msg: 'Error creating follow-up', error: error.message });
  }
};

// Get all follow-ups
const getAllFollowUps = async (req, res) => {
  try {
    const followUps = await FollowUp.find().populate('customer_id');
    res.status(200).json(followUps);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching follow-ups', error: error.message });
  }
};

// Get follow-up by ID
const getFollowUpById = async (req, res) => {
  try {
    const followUp = await FollowUp.findById(req.params.id).populate('customer_id');
    if (!followUp) return res.status(404).json({ msg: 'Follow-up not found' });
    res.status(200).json(followUp);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching follow-up', error: error.message });
  }
};

// Update follow-up
const updateFollowUp = async (req, res) => {
  try {
    const updated = await FollowUp.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ msg: 'Follow-up not found' });
    res.status(200).json({ msg: 'Follow-up updated', followUp: updated });
  } catch (error) {
    res.status(500).json({ msg: 'Error updating follow-up', error: error.message });
  }
};

// Delete follow-up
const deleteFollowUp = async (req, res) => {
  try {
    const deleted = await FollowUp.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: 'Follow-up not found' });
    res.status(200).json({ msg: 'Follow-up deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting follow-up', error: error.message });
  }
};

module.exports = {
  createFollowUp,
  getAllFollowUps,
  getFollowUpById,
  updateFollowUp,
  deleteFollowUp
};
