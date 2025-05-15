// screens/SplashScreen.tsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>App name</Text>
      <Text style={styles.footer}>KIMPACT Lab.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  appName: {
    fontSize: 24,
    color: '#001F54', // 네이비 느낌
    marginTop: '50%',
  },
  footer: {
    fontSize: 12,
    color: '#001F54',
  },
});

export default SplashScreen;
