import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function AnotherDetailHome() {
  const Navigation = useNavigation();
  return (
    <View style={{backgroundColor:"purple", flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>AnotherDetailHome</Text>
      <Button 
        title='Volver a detalles' 
        onPress={() => Navigation.goBack()}
      />
    </View>
  )
}

const styles = StyleSheet.create({})