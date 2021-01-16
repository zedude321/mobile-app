import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  Alert,
  TouchableHighlight,
  Text
} from 'react-native';

const App = () => {
  const [countS, setcount] = React.useState(0)
  const onPress = () => { 
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed"), style: "destructive" }
      ]
    );
  }
  const count = () => {
    setcount(countS + 1)
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Button onPress={() => {onPress()}} title='Click me' />  
        </View>
        <TouchableHighlight onPress={() => {count()}} underlayColor="white">
          <View>
            <Text>Hello</Text>
          </View>
        </TouchableHighlight>
        <View>
          <Text>{countS}</Text>
        </View>
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
