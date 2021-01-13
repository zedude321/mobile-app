import React from 'react';
import {
   StyleSheet,
   View,
   Image,
   Text,
} from 'react-native';

export const Movie: React.FC<any> = (props) => {
   const { uri, name, rating, date } = props
   console.log('HEY')

   return (
      <>
         <View style={styles.main}>
            <Image style={styles.img} source={{
               uri: uri
            }} />
            <View style={styles.miniContainer}>
               <Text style={{ fontSize: 18, width: 200, color: 'white' }}>{name}</Text>
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 24, color: 'pink', fontWeight: 'bold' }}>{rating}</Text>
                  <Text style={{ color: 'white', marginLeft: 25 }}>{date}</Text>
               </View>
            </View>
         </View>
      </>
   )
}

const styles = StyleSheet.create({
   main: {
      width: '95%',
      backgroundColor: '#4a4a4a',
      borderRadius: 10,
      flexDirection: 'row',
      marginTop: 10,
   },
   img: {
      height: 175,
      width: 118,
      borderRadius: 10,
   },
   miniContainer: {
      padding: 15,
      justifyContent: 'space-between'
   },
})