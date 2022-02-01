import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Myaccount = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

export default Myaccount;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
});
