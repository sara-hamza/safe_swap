import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to SafeSwap 🛡️</Text>
      <Button title="Scan QR" onPress={() => navigation.navigate('QR')} />
      <Button title="Start Transaction" onPress={() => navigation.navigate('Transaction')} />
    </View>
  );
}
