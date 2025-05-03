import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'#1b2',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.text}>Home</Text>
      <Button title='Go Details' onPress={()=>navigation.navigate("DetailHome")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
})