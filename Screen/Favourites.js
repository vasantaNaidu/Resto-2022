import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import { colors } from '../Global/styles'

const Favourites = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style ={styles.view2}>
                        <Icon 
                            name ="arrow-left"
                            type = "material-community"
                            color = {colors.black}
                            size = {25}
                            onPress ={()=>navigation.goBack()}
                        />
        </View>
      <Text style={styles.text1}>My Favourites</Text>

      <View style={styles.view1}>
        <Text style={styles.text2}>No Records Found!</Text>
      </View>
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({
  container:{
    height:80,
    marginTop:30
  },
  view2:{margin:10,
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    
   },
   text1:{
    margin:15,
    marginLeft:30,
    fontSize:20,
    fontWeight:"bold"
   },
   text2:{
    alignSelf:'center',
    margin:10
   },
   view1:{
    alignContent:'center'
   },
})