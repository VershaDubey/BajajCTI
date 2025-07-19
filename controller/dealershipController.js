const Dealership = require('../model/dealershipmodel');

exports.createDealership = async (req, res) => {
  try {
    const { name, location, outbound_number } = req.body;

    const newDealer = new Dealership({ name, location, outbound_number });
    await newDealer.save();

    res.status(201).json(newDealer);
  } catch (error) {
    res.status(500).json({ msg: 'Error creating dealership', error: error.message });
  }
};

exports.getAllDealerships = async (req, res) => {
  try {
    const dealers = await Dealership.find();
    res.json(dealers);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching dealerships', error: error.message });
  }
};

exports.getDealershipById = async (req, res) => {
  try {
    const dealer = await Dealership.findById(req.params.id);
    if (!dealer) return res.status(404).json({ msg: 'Dealership not found' });

    res.json(dealer);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching dealership', error: error.message });
  }
};

exports.updateDealership = async (req, res) => {
  try {
    const updatedDealer = await Dealership.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!updatedDealer) return res.status(404).json({ msg: 'Dealership not found' });

    res.json(updatedDealer);
  } catch (error) {
    res.status(500).json({ msg: 'Error updating dealership', error: error.message });
  }
};

exports.deleteDealership = async (req, res) => {
  try {
    const deletedDealer = await Dealership.findByIdAndDelete(req.params.id);

    if (!deletedDealer) return res.status(404).json({ msg: 'Dealership not found' });

    res.json({ msg: 'Dealership deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting dealership', error: error.message });
  }
};
