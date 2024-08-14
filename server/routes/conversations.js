const express = require('express');
const { SavedConversation ,getByUserId} = require('../controllers/conversations');

const router = express.Router();

router.post('/',SavedConversation)
router.get('/:userId',getByUserId)


module.exports = router; 