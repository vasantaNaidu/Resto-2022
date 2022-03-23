import React, { useState } from "react";
import { AppRegistry,Text, SafeAreaView, StyleSheet,
   TextInput, TouchableOpacity, ImageBackground, Image, StatusBar, View, Platform} from "react-native";
AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);
import { auth, db} from "../db/firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import DatePicker from 'react-native-datepicker';
import { doc, setDoc, Timestamp } from "firebase/firestore"; 


const Signup=(navigation)=> {

    const [isSecureEntry,setisSecureEntry] = useState(true);
    const [Name, setName] = useState("");
    const [PhoneNo, setPhoneNo] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [date, setDate] = useState();

    const userData = {
        dateandtime : Timestamp.fromDate(new Date()),
        userName : setName,
        userDOB : setDate,
        userPhone : setPhoneNo,
        userEmail : setEmail,
        userPass : setPassword
    };

    const handleSignUp  =()=> {
        createUserWithEmailAndPassword(auth,Email, Password)
        .then((userCredentials) = async() => {
            // const user = userCredentials.user;
            const re = await setDoc(doc(db, "users", "one"), userData);
            // console.log('Registered with:', user.email)
            console.log('Data is sent:',re)
        })
        .catch(error => alert(error.message))
    }

    return ( 
        <SafeAreaView style={styles.container}>

              <StatusBar
                translucent
                barStyle='dark-content'
                backgroundColor="#926C44"
             />          
          <ImageBackground source={require('./bglogin.jpg')} resizeMode="cover" style={styles.image} blurRadius={1}></ImageBackground>
          <Image source={require('./textlogo.png')} style={styles.textlogo} />
            <Text style={styles.headtext}>CREAT YOUR ACCOUNT!</Text>
            <Text style={styles.detail}>START YOUR HUNGRY {'\n'}JOURNEY TODAY.</Text>
            <TextInput
                placeholder="Name" 
                style={styles.inputView} 
                onChangeText={(Name) => setName(Name)}/>

                <View style={styles.inputView1}>
                <DatePicker
                  
                  date={date} // Initial date from state
                  mode="date" // The enum of date, datetime and time
                  format="DD-MM-YYYY"
                  minDate="01-01-1960"
                  maxDate={date}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      display: 'none',
                      
                    },
                    dateInput: {
                      borderWidth:0,
                      marginStart:1
                    },
                    dateText: {
                      fontWeight:"bold",
                      fontSize:20,
                      color:"#79443B",
                      
                    },
                  }}
                  onDateChange={(date) => {
                    setDate(date);
                  }}
                  />
                  <Text style={{fontSize:20,alignSelf:'center', marginLeft:35, color:'white', fontWeight:'bold'}}> - Date of Birth</Text>
                </View>
            <TextInput
                placeholder="Mobile number"
                style={styles.inputView} 
                keyboardType="numeric"
                onChangeText={(PhoneNo) => setPhoneNo(PhoneNo)}/>
            <TextInput
                placeholder="Email ID"
                style={styles.inputView} 
                onChangeText={(Email) => setEmail(Email)}/>

            <View style={{flexDirection:'row',alignContent:'center',paddingLeft:40}}>

              <TextInput 
                placeholder="Password"
                style={styles.PasswordinputView} 
                secureTextEntry={isSecureEntry}
                onChangeText={(Password) => setPassword(Password)}/>
                <TouchableOpacity 
                    onPress={()=>{setisSecureEntry((prev)=>!prev);}}
                    style={{paddingRight:55,height:50}}>
                    <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.description}>*password must contain 1 capital, small, number and special character.</Text>

            <TouchableOpacity style={styles.signBtn} onPress={handleSignUp}>
                <Text style={styles.signText}>REGISTER</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'peru',
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

      inputView1: {
        width: "80%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        borderBottomColor: 'cornsilk', 
        borderBottomWidth: 3,
        fontWeight:"bold",
        fontSize:20,
        flexDirection:'row'
      },

      inputView2: {
        width: "80%",
        height: 50,
        alignItems: "center",
        fontWeight:"bold",
        fontSize:20,
        flexDirection:'row'
      },

      PasswordinputView : {
        width: "80%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        borderBottomColor: 'cornsilk', 
        borderBottomWidth: 3,
        fontWeight:"bold",
        fontSize:20,
        flexDirection:'row',
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
      image:{
        flex:1,
        justifyContent:'center'
    },

    textlogo: {
      height:'20%',
      width: '50%',
      alignSelf:'center',
      marginTop:5
    },

     
});


export default Signup;