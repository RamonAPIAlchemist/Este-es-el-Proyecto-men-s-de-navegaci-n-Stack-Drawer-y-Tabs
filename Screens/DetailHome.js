import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function DetailHome() {
  const Navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "pink", flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DetailHome</Text>
      <Button
        title='Mas detalles'
        onPress={() => Navigation.navigate("AnotherDetailsHome")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})