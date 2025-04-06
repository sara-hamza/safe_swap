import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function TransactionScreen() {
  const [buyer, setBuyer] = useState('');
  const [seller, setSeller] = useState('');
  const [amount, setAmount] = useState('');

  const initiate = async () => {
    const response = await fetch('https://yourapi.com/api/transactions/initiate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buyer_id: buyer, seller_id: seller, amount }),
    });

    const data = await response.json();
    alert(`Transaction Created: ID ${data.transaction.id}`);
  };

  return (
    <View>
      <TextInput placeholder="Buyer ID" onChangeText={setBuyer} />
      <TextInput placeholder="Seller ID" onChangeText={setSeller} />
      <TextInput placeholder="Amount" onChangeText={setAmount} />
      <Button title="Create Transaction" onPress={initiate} />
    </View>
  );
}
