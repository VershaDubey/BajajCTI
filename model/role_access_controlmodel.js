const mongoose = require('mongoose');
const roleAccessControlSchema = require('../schema/role_access_control');

module.exports = mongoose.model('RoleAccessControl', roleAccessControlSchema);
