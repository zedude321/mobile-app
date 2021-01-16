import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';

Appearance.getColorScheme();

const App = () => {

  const colorScheme = useColorScheme();
  if (colorScheme == 'light') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{color: 'black'}}>You chose {colorScheme} theme!</Text>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={darkStyle.container}>
        <Text style={{color: 'white'}}>You chose {colorScheme} theme!</Text>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  }
})
const darkStyle = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  }
})

export default App;