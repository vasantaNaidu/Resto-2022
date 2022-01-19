import React, { useState } from "react";
import { AppRegistry,Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Pressable,} from "react-native";
AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);

const Signup=(navigation)=> {
    const [Name, setName] = useState("");
    const [DOB, setDOB] = useState("");
    const [PhoneNo, setPhoneNo] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
     
    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.headtext}>CREAT YOUR ACCOUNT!</Text>
            <Text style={styles.detail}>START YOUR HUNGRY {'\n'}JOURNEY TODAY.</Text>
            <TextInput
                placeholder="Name" 
                style={styles.inputView} 
                onChangeText={(Name) => setName(Name)}/>
            <TextInput
                placeholder="Date Of Birth" 
                style={styles.inputView} 
                autoComplete=""
                onChangeText={(DOB) => setDOB(DOB)}/>
            <TextInput
                placeholder="Mobile number"
                style={styles.inputView} 
                keyboardType="numeric"
                onChangeText={(PhoneNo) => setPhoneNo(PhoneNo)}/>
            <TextInput
                placeholder="Email ID"
                style={styles.inputView} 
                secureTextEntry={true}
                onChangeText={(Email) => setEmail(Email)}/>
            <TextInput
                placeholder="Password"
                style={styles.inputView} 
                secureTextEntry={true}
                onChangeText={(Password) => setPassword(Password)}/>
            
            <Text style={styles.description}>*password must contain 1 capital, small, number and special character.</Text>

            <TouchableOpacity style={styles.signBtn}>
                <Text style={styles.signText}>REGISTER</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5b73b',
        alignItems: "center",
        justifyContent: "center",
        
      },

    headtext: {
      color:"cornsilk",
      fontWeight:"bold",
      fontFamily:"sans-serif-condensed",
      fontSize:30,
    },

    detail:{
        color:"cornsilk",
        textAlign:"center",
        margin:10,
        fontSize:20,
    },

      inputView: {
        width: "80%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        borderBottomColor: 'cornsilk', 
        borderBottomWidth: 3,
        fontWeight:"bold",
        fontSize:20,
      },

      description: {
        fontSize:10,
        alignItems: "flex-start",
      },

      signBtn: {
        width: "40%",
        borderRadius: 5,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        marginBottom:40 ,
        backgroundColor: "yellow",
      },

      signText:{
          fontWeight:"bold",
          fontSize:25,
          fontFamily:'sans-serif-condensed',
      },
      textcolor:{
        color:"cornsilk",
        fontFamily:'sans-serif-condensed', 
        fontSize:22,
        fontWeight:"bold", 
        margin:10,
      
      },
     
});


export default Signup;