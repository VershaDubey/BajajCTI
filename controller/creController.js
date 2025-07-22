const CRE = require('../model/cremodel');

// Create CRE
const createCRE = async (req, res) => {
  try {
    const cre = new CRE(req.body);
    await cre.save();
    res.status(201).json({ msg: 'CRE created successfully', cre });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Get all CREs
const getAllCREs = async (req, res) => {
  try {
    const cres = await CRE.find();
    res.status(200).json(cres);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Get single CRE by ID
const getCREById = async (req, res) => {
  try {
    const cre = await CRE.findById(req.params.id);
    if (!cre) return res.status(404).json({ msg: 'CRE not found' });
    res.status(200).json(cre);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Update CRE
const updateCRE = async (req, res) => {
  try {
    const updatedCRE = await CRE.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCRE) return res.status(404).json({ msg: 'CRE not found' });
    res.status(200).json({ msg: 'CRE updated successfully', cre: updatedCRE });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Delete CRE
const deleteCRE = async (req, res) => {
  try {
    const deletedCRE = await CRE.findByIdAndDelete(req.params.id);
    if (!deletedCRE) return res.status(404).json({ msg: 'CRE not found' });
    res.status(200).json({ msg: 'CRE deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

module.exports = {
  createCRE,
  getAllCREs,
  getCREById,
  updateCRE,
  deleteCRE
};
