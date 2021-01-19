import React from 'react';
import {
   SafeAreaView, 
   StyleSheet,
   Text
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';

export const Appear = () => {
   const colorScheme = useColorScheme();

   return (
      <SafeAreaView style={styles.container}>
         <Text>{colorScheme}</Text>
      </SafeAreaView>
   )
};

const styles = StyleSheet.create({
   container: {
      padding: 20,
      flex: 1,
      alignItems: 'center',
   }
})