import React from 'react';
import {
   StyleSheet,
   Text,
   TextInput,
} from 'react-native';

export const FormInput: React.FC<any> = (props) => {
   const { placeholder, label, validation, type } = props
   const [value, onChangeText] = React.useState();
   const [wrong, setWrong] = React.useState(false)

   const check = (text: any) => {
      if (validation(text) === false) {
         setWrong(true)
      } else {
         setWrong(false)
      }
      return onChangeText(text)
   }

   return (<>
      <Text style={styles.label}>{label}</Text>
      <TextInput
         style={wrong ? styles.wrong : styles.input}
         onChangeText={text => check(text)}
         value={value}
         placeholder={placeholder}
         textContentType={type}
      />
   </>)
}

const styles = StyleSheet.create({
   input: {
      borderColor: 'green',
      borderWidth: 1,
      borderRadius: 5,
      width: '100%',
      color: 'black'
   },
   wrong: {
      borderColor: 'red',
      color: 'red',
      borderWidth: 1,
      borderRadius: 5,
      width: '100%'
   },
   label: {
      fontSize: 20,
      alignSelf: 'flex-start',
      marginBottom: 5
   }
})