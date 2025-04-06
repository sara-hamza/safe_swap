const db = require('../utils/db');
const { triggerPayOut } = require('../utils/payidStub');

exports.initiateTransaction = async (req, res) => {
  const { buyer_id, seller_id, amount } = req.body;

  const tx = await db.query(
    'INSERT INTO transactions (buyer_id, seller_id, amount, status) VALUES ($1, $2, $3, $4) RETURNING *',
    [buyer_id, seller_id, amount, 'escrowed']
  );

  res.status(201).json({ success: true, transaction: tx.rows[0] });
};

exports.confirmReceipt = async (req, res) => {
  const id = req.params.id;
  const tx = await db.query('SELECT * FROM transactions WHERE id = $1', [id]);
  if (!tx.rows.length) return res.status(404).json({ error: 'Transaction not found' });

  const transaction = tx.rows[0];
  await db.query('UPDATE transactions SET status = $1 WHERE id = $2', ['released', id]);
  await triggerPayOut(transaction.seller_id, transaction.amount);
  res.status(200).json({ message: 'Funds released to seller ✅' });
};
