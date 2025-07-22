const Role = require('../model/rolemodel');

// Create Role
exports.createRole = async (req, res) => {
  try {
    const { role } = req.body;
    const newRole = new Role({ role });
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ msg: 'Error creating role', error: error.message });
  }
};

// Get All Roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching roles', error: error.message });
  }
};

// Get Role by ID
exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ msg: 'Role not found' });
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching role', error: error.message });
  }
};

// Update Role
exports.updateRole = async (req, res) => {
  try {
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRole) return res.status(404).json({ msg: 'Role not found' });
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ msg: 'Error updating role', error: error.message });
  }
};

// Delete Role
exports.deleteRole = async (req, res) => {
  try {
    const deletedRole = await Role.findByIdAndDelete(req.params.id);
    if (!deletedRole) return res.status(404).json({ msg: 'Role not found' });
    res.json({ msg: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting role', error: error.message });
  }
};
