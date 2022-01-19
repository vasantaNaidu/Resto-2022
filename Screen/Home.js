import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Home = ({navigation}) => {
  return (
      <View style={styles.container}>
          <Text>hi</Text>
      </View>
  )
};


export default Home;

const styles = StyleSheet.create ({

    container: {
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    },
})
