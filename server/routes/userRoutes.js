const express = require('express');
const router = express.Router();
const db = require('../utils/db');

router.get('/:id', async (req, res) => {
  const user = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
  res.json(user.rows[0]);
});

module.exports = router;
