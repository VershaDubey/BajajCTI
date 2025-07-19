const RoleAccessControl = require('../model/role_access_controlmodel');

exports.createRoleAccessControl = async (req, res) => {
  try {
    const { object_name , can_view , can_create , can_edit , can_delete} = req.body;

    const newRoleAccessControl = new RoleAccessControl({ object_name , can_view , can_create , can_edit , can_delete});
    await newRoleAccessControl.save();

    res.status(201).json(newRoleAccessControl);
  } catch (error) {
    res.status(500).json({ msg: 'Error creating RoleAccessControl', error: error.message });
  }
};

exports.getAllRoleAccessControl = async (req, res) => {
  try {
    const roleaccesscontrol = await RoleAccessControl.find();
    res.json(roleaccesscontrol);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching RoleAccessControl ', error: error.message });
  }
};

exports.getRoleAccessControlById = async (req, res) => {
  try {
    const roleaccesscontrol = await RoleAccessControl.findById(req.params.id);
    if (!roleaccesscontrol) return res.status(404).json({ msg: 'RoleAccessControl not found' });

    res.json(roleaccesscontrol);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching roleaccesscontrol', error: error.message });
  }
};

exports.updateRoleAccessControl  = async (req, res) => {
  try {
    const updatededroleAccessControl = await RoleAccessControl.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!this.updatededroleAccessControl) return res.status(404).json({ msg: 'roleAccessControl not found' });

    res.json(updatedeoleAccessControl);
  } catch (error) {
    res.status(500).json({ msg: 'Error updating roleAccessControl ', error: error.message });
  }
};

exports.deleteRoleAccessControl= async (req, res) => {
  try {
    const deletedRoleAccessControl = await RoleAccessControl.findByIdAndDelete(req.params.id);

    if (!deletedRoleAccessControl) return res.status(404).json({ msg: 'RoleAccessControl not found' });

    res.json({ msg: 'RoleAccessControl deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting roleaccesccontrol', error: error.message });
  }
};
