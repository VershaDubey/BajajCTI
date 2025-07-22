// // controller/userController.js
// const User = require('../model/User');

// const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     console.error('Error fetching user:', error.message);
//     res.status(500).json({ msg: 'Server error', error: error.message });
//   }
// };

// module.exports = { getUserById };
const User = require('../model/User');

// CREATE user
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ msg: 'User already exists' });

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.status(201).json({ msg: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// READ user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// UPDATE user
const updateUser = async (req, res) => {
  try {
    const updates = req.body;
    updates.updatedAt = Date.now(); // ensure updated timestamp

    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json({ msg: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// DELETE user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers
};
