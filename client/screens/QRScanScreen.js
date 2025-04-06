import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    fetch(`https://yourapi.com/api/transactions/confirm/${data}`, { method: 'POST' })
      .then(() => alert("Transaction Confirmed ✅"))
      .catch(() => alert("Something went wrong"));
  };

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (hasPermission === false) return <Text>No camera access</Text>;

  return (
    <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={{ flex: 1 }} />
  );
}
