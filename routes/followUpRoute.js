const express = require('express');
const router = express.Router();
const {
  createFollowUp,
  getAllFollowUps,
  getFollowUpById,
  updateFollowUp,
  deleteFollowUp
} = require('../controller/followUpController');

const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, createFollowUp);
router.get('/', verifyToken, getAllFollowUps);
router.get('/:id', verifyToken, getFollowUpById);
router.patch('/:id', verifyToken, updateFollowUp);
router.delete('/:id', verifyToken, deleteFollowUp);

module.exports = router;
