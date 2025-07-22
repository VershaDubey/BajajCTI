
// const express = require('express');
// const router = express.Router();
// const { getUserById } = require('../controller/userController');
// const verifyToken = require('../middleware/verifyToken');

// // GET /api/users/:id
// router.get('/:id', verifyToken, getUserById);

// module.exports = router;
const express = require('express');
const router = express.Router();
const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers
} = require('../controller/userController');

const verifyToken = require('../middleware/verifyToken');

// protected routes 
router.post('/',verifyToken,createUser);
router.get('/', verifyToken, getAllUsers);           // GET all users
router.get('/:id', verifyToken, getUserById);        // GET single user
router.post('/', verifyToken, createUser);           // POST create user
router.patch('/:id', verifyToken, updateUser);       // PATCH update user
router.delete('/:id', verifyToken, deleteUser);      // DELETE user

module.exports = router;
