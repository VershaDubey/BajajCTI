const mongoose = require('mongoose');
const RoleSchema = require('../schema/role');

const Role = mongoose.model('Role', RoleSchema);
module.exports = Role;
