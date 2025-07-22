const Dealer = require('../model/dealermodel');

// Create dealer
const createDealer = async (req, res) => {
  try {
    const dealer = new Dealer(req.body);
    await dealer.save();
    res.status(201).json({ msg: 'Dealer created successfully', dealer });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Get all dealers
const getAllDealers = async (req, res) => {
  try {
    const dealers = await Dealer.find();
    res.status(200).json(dealers);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Get single dealer by ID
const getDealerById = async (req, res) => {
  try {
    const dealer = await Dealer.findById(req.params.id);
    if (!dealer) return res.status(404).json({ msg: 'Dealer not found' });
    res.status(200).json(dealer);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Update dealer
const updateDealer = async (req, res) => {
  try {
    const updatedDealer = await Dealer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDealer) return res.status(404).json({ msg: 'Dealer not found' });
    res.status(200).json({ msg: 'Dealer updated successfully', dealer: updatedDealer });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Delete dealer
const deleteDealer = async (req, res) => {
  try {
    const deletedDealer = await Dealer.findByIdAndDelete(req.params.id);
    if (!deletedDealer) return res.status(404).json({ msg: 'Dealer not found' });
    res.status(200).json({ msg: 'Dealer deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

module.exports = {
  createDealer,
  getAllDealers,
  getDealerById,
  updateDealer,
  deleteDealer
};
