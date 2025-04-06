CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  payid TEXT,
  reputation_score INTEGER DEFAULT 0
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  buyer_id INTEGER REFERENCES users(id),
  seller_id INTEGER REFERENCES users(id),
  amount NUMERIC,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
