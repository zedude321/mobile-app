import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={{marginBottom: 15}}>Hello World</Text>
        <TextInput style={styles.input} placeholder='Enter text...' />
        <TouchableHighlight underlayColor="white" onPress={() => { }}>
          <View>
            <Text style={{ color: 'purple', fontSize: 16 }}>Submit</Text>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: '75%',
    padding: 15,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 100,
    marginBottom: 15
  }
})

export default App;
