import React from 'react';
import { FormInput } from './components/formImput'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const App = () => {
  const name = (value: string) => {
    let pass = true
    if (/\d/.test(value) || value.length <= 2) {
      pass = false
    }
    return pass
  }

  const age = (value: any) => {
    let pass = true
    if (!/\d/.test(value) || Number(value) < 18 || Number(value) > 100) {
      pass = false
    }
    return pass
  }

  const email = (value: string) => {
    let pass = true
    if (!value.includes('@') || !value.split('@')[1].includes('.')) {
      pass = false
    }
    return pass
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FormInput validation={name} label='Your name' />
        <FormInput validation={age} label='Your age' />
        <FormInput validation={email} label='Your email' type='emailAddress' />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  }
})

export default App;
