import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BookingPage = () => {
  return (
    <View style={styles.container}>
      <Text>BookingPage</Text>
    </View>
  )
}

export default BookingPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
      },
})