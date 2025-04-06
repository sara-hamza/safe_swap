import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import TransactionScreen from './TransactionScreen';
import QRScanScreen from './QRScanScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Transaction" component={TransactionScreen} />
      <Stack.Screen name="QR" component={QRScanScreen} />
    </Stack.Navigator>
  );
}
