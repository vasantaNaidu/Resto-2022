import React, {useState,useContext,useEffect} from 'react';
import {auth} from "../db/firebaseconfig"

import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image
 
} from 'react-native';


import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,

  } from '@react-navigation/drawer';

  import {
    Avatar,
    Icon
     } from 'react-native-elements'

import {colors} from '../Global/styles'
import { SignInContext } from '../contexts/authContext'
import email from 'react-native-email'




const DrawerContent = (props)=> {

    const {dispatchSignedIn} = useContext(SignInContext)

    const handlesignOut = () =>{
        Alert.alert(
            "Confirm",
            "Are you sure?",
            [
                {
                    text:"Yes",
                    onPress: () => {
                        auth.signOut()
                        .then(
                            ()=>{console.log("USER SUCCESSFULLY SIGNED OUT")
                            dispatchSignedIn({type:"UPDATE_SIGN_OUT",payload:{userToken:null}})
                        })
                        .catch((errot) => {
                            alert(error.message)
                        })}
                },
                {
                    text:"No", 
                    onPress : () => console.log("no Pressed")
                }
            ]
        )
        
    }

    // const ratebox = () => {
    //     Alert.alert(
    //         "Rate us",
    //         "My Alert Msg",
    //         [
    //           {
    //             text: "Cancel",
    //             onPress: () => console.log("Cancel Pressed"),
    //             style: "cancel"
    //           },
    //           { text: "OK", onPress: () => console.log("OK Pressed") }
    //         ]
    //       )
    // }

    const sendfeedback = () => {
        const to = 'stackofash@gmail.com' // string or array of email addresses
        email(to, {
            // Optional additional arguments
            // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            // bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Feedback',
            body: ''
        }).catch(console.error)
    }

    return(
        <View style ={styles.container}>
                 <DrawerContentScrollView {...props}>
                 <View style ={{backgroundColor:colors.buttons,marginBottom:20,height:170}}>
                     <Image source={require('../Screen/textlogo.png')} style = {{marginLeft:10,height:'100%',width: '90%'}}/>
                {/* <View style = {{flexDirection:'row', alignItems:'center',
                                    padding:10}}>
                    <Avatar 
                        rounded
                        avatarStyle ={styles.avatar}
                        size = {70}
                        source = {{uri:"https://bit.ly/3GjVRz1"}}
                        
                    />

                    <View style ={{marginLeft:10}}>
                        <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }} >Komi San</Text>
                        <Text style ={{color:colors.cardbackground,fontSize:14}} > kittysan@gmail.com</Text>
                    </View>

                </View> */}

                <View style ={{flexDirection:'row',justifyContent:"space-evenly",paddingBottom:5}}>

                    {/* <View style ={{flexDirection:'row', marginTop:0,}}>
                        <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }}  >
                            <Text  style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>1</Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}} >My Favorites</Text>
                        </View>
                    </View> */}

                    {/* <View style ={{flexDirection:'row', marginTop:0}}>
                         <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }}  >
                            <Text  style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>0</Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}} >My Cart</Text>
                        </View>    
                    </View> */}

                </View>
            </View>


                
                <DrawerItemList {...props} />

                {/* <DrawerItem 
                    label = "Promotions"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "tag-heart"
                            color ={color}
                            size ={size}
                        />
                    )}
                /> */}



            {/* <DrawerItem 
                    label = "Settings"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "cog-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                /> */}



            <DrawerItem 
                    label = "Send Feedback"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "email-edit-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                    onPress = {sendfeedback}
                />

        {/* <DrawerItem 
                    label = "Rate us!"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "star-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                    onPress = {()=>{ratebox()}}
                /> */}





       {/* <View style ={{borderTopWidth:1, borderTopColor:colors.grey5}}>
            <Text style ={styles.preferences}>Preferences</Text>

            <View style ={styles.switchText}>
                <Text style ={styles.darkthemeText}>Dark Theme</Text>
                <View style ={{ paddingRight:10}}>
                        <Switch 
                            trackColor = {{false: "#767577",true : "#81b0ff"}}
                            thumbColor = "#f4f3f4"
                        />
                </View>
            </View>

       </View>          */}



     
                 

                <DrawerItem 
                    label = "Sign Out"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "logout-variant"
                            color ={color}
                            size ={size} 
                        />
                    )}
                    onPress ={()=>{handlesignOut()}}
                />

</DrawerContentScrollView>
    </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    avatar:{
        
        borderColor:colors.pagebackground,
        resizeMode:'cover',
        
    },

    // preferences:{
    //     fontSize: 16,
    //     color:colors.grey2,
    //      paddingTop:10,
    //      paddingLeft:20,
    // },

    // switchText:{
    //     flexDirection:"row",
    //     alignItems:"center",
    //     justifyContent:"space-between",
    //     paddingLeft:20,
    //     paddingVertical:5,
    //     paddingRight:10
    // },
    // darkthemeText:{
    //     fontSize: 16,
    //     color:colors.grey2,
    //      paddingTop:10,
    //      paddingLeft:0,
    //      fontWeight:"bold"
    // }
    
})

export default DrawerContent;