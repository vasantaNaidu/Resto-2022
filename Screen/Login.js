import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  StatusBar
} from "react-native";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
                translucent
                barStyle='light-content'
             />
      <ImageBackground source={require('./bglogin.jpg')} resizeMode="cover" style={styles.image} blurRadius={1}>

      <Image source={require('./logo1.png')} style={styles.logo} />
      
      <View style={[styles.box]}>

      <Image source={require('./textlogo.png')} style={styles.textlogo} />

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)} />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)} />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('DrawerNavigator')}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

      <Text>DON'T HAVE A ACCOUNT? <TouchableWithoutFeedback onPress={() =>navigation.navigate('Signup')}>
        <Text>Register here</Text>
        </TouchableWithoutFeedback>
        </Text>

      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 2,
    justifyContent: "center"
  },

  logo: {
    height:'20%',
    width: '15%',
    aspectRatio: 1,
    alignSelf:'center'

  },

  box:{
    aspectRatio:1,
    height: 500,
    width: 200,
    borderRadius: 5,
    marginTop:10,
    backgroundColor: "#C1C1C1",
    alignItems:'center',
    opacity:0.7,
    position:'relative',
    overflow:'hidden'

  },

  textlogo: {
    height:'40%',
    width: '40%',
    justifyContent:'flex-start',
  },

  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 40,
    width: "70%",
    height: 50,
    alignItems: "center",
    margin:10
  },
 
  TextInput: {
    height: 50,
    width:300,
    textDecorationColor:"#999999",
    fontWeight:'bold'
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
    marginTop: 10,
    backgroundColor: "#e5b73b",

  },

  forgot_button: {
    height: 30,
    marginTop: 10,
  },
});

export default Login;