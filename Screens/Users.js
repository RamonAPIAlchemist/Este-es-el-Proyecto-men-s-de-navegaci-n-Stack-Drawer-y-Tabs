import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Users() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto} >Users</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  }
})