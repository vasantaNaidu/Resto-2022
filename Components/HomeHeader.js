import React from 'react'

import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'
import {colors,parameters} from '../Global/styles'

export default function HomeHeader({navigation}){

    return(
    <View style ={styles.header}>

        <View style ={{alignItems:"center",justifyContent:'center', marginLeft:15}}>
            <Icon 
                type = "material-community"
                name = "menu"
                color = {colors.cardbackground}
                size = {32}
                onPress ={()=>{
                    navigation.toggleDrawer()
                }}
            />
        </View>

        <View style ={{alignItems:"center", justifyContent:"center"}}>
            <Text style ={{color:colors.cardbackground, fontSize:25,fontWeight:'bold'}}>RESTO</Text>
        </View>

        <View style ={{alignItems:"center", justifyContent:"center", marginRight:15}}>
            <Icon 
                type ="material-community"
                name ="calendar-check"
                size = {32}
                color ={colors.cardbackground}
                onPress={()=>{navigation.navigate("Bookinghistory")}}

            />
        </View>


    </View>
    )
}

const styles = StyleSheet.create({

    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:'space-between'
    }
})