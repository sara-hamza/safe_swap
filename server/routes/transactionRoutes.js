const express = require('express');
const { initiateTransaction, confirmReceipt } = require('../controllers/transactionController');
const router = express.Router();

router.post('/initiate', initiateTransaction);
router.post('/confirm/:id', confirmReceipt);

module.exports = router;
