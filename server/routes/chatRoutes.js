const express = require('express');
const { chatWithAI, generateSummary } = require('../controllers/chatController');

const router = express.Router();

router.post('/', chatWithAI);
router.post('/summary', generateSummary);

module.exports = router;
