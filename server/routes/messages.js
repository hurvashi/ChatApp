const express = require('express');
const router = express.Router();
const {postMessage, getMessage}= require('../controllers/messages')

router.post('/',postMessage)

router.get('/:conversationId',getMessage);


module.exports = router; 