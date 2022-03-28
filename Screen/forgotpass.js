import React, { useState } from 'react'
import { TextInput, SafeAreaView, View, StyleSheet, StatusBar, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import { colors } from '../Global/styles'
import { auth } from "../db/firebaseconfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Forgotpass = ({navigation}) => {
    
    const [email, setEmail] = useState("");

    const ForgotPassword = () => {
        sendPasswordResetEmail(auth,email)
        .then(() => {
          alert("reset email sent to " + email);
      })
      .catch(function (e) {
          alert(e);
      });
      }

  return (
    <SafeAreaView style={styles.wrapper}>
        <StatusBar
                translucent
                barStyle='dark-content'
                backgroundColor="#926C44"
             />
             <View style ={styles.view2}>
                        <Icon 
                            name ="arrow-left"
                            type = "material-community"
                            color = {colors.black}
                            size = {25}
                            onPress ={()=>navigation.goBack()}
                        />
            </View>
             <View style={{marginTop:10, marginLeft:15}}>
                <Text style={styles.forgotPasswordHeading}>
                    Forgot your password?
                </Text>
                <Text style={styles.forgotPasswordSubHeading}>
                    Enter your email to find your account
                </Text>
            </View> 
            <View style={{alignContent:'center', justifyContent:'center',marginTop:50}}>
                    <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        value={email}
                        placeholder="Email Address"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setEmail(text)}
                        />

                    </View>

                    <TouchableOpacity style={styles.loginBtn} onPress={forgotPassword}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
    </SafeAreaView>
       
    );
  }

export default Forgotpass

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
    backgroundColor: "beige",
    height:80,
        marginTop:30
      },
      forgotPasswordHeading: {
        fontSize: 28,
        color:"black",
        fontWeight: "300"
      },
      forgotPasswordSubHeading: {
        color: "black",
        fontWeight: "600",
        fontSize: 15
      },
      view2:{margin:10,
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        
       },
       inputView: {
        backgroundColor: "#ffffff",
        width: "90%",
        height: 70,
        alignItems: "center",
        marginLeft:20
      },
      TextInput: {
        height: 70,
        width:300,
        textDecorationColor:"#999999",
        fontWeight:'bold',
        marginLeft:15,
        textAlign:'center'
      },
      loginText:{
        fontWeight:'bold',
        fontSize: 20
      },
     
      loginBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#e5b73b",
        marginLeft:150
    
      },
    });
