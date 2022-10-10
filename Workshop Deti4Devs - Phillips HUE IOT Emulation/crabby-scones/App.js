import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// Components
import LampControls from './components/LampControls';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Workshop React Native
      </Text>
      <Text style={styles.paragraph}>
        {new Date().toDateString()}
      </Text>
      <LampControls/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

