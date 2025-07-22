const Admin = require('../model/admin');

// create Admin
const createAdmin = async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    res.status(201).json({ msg: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// get all Admins
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// get Admin by ID
const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ msg: 'Admin not found' });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Update Admin
const updateAdmin = async (req, res) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedAdmin) return res.status(404).json({ msg: 'Admin not found' });

    res.status(200).json({ msg: 'Admin updated', admin: updatedAdmin });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Delete Admin
const deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    if (!deletedAdmin) return res.status(404).json({ msg: 'Admin not found' });

    res.status(200).json({ msg: 'Admin deleted' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
};
