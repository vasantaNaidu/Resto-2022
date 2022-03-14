import React,{useEffect,useContext} from 'react';
import {AppRegistry,View, Text, StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'
AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);
import { auth } from "../db/firebaseconfig";
import { SignInContext } from "../contexts/authContext"
import { onAuthStateChanged } from 'firebase/auth';

const WelcomeScreen =({navigation}) =>
{

  const {dispatchSignedIn} = useContext(SignInContext)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
      }else{
        dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
      }
    })
    
  },[])

    return(

    <ScrollView contentContainerStyle = {styles.contentContainer}>
    

        <View style ={styles.headBox}>    

        <Image source={require('./textlogo.png')} style={{height:'30%',width:'70%',}}/>

        

            <Text style={[styles.headText,styles.colors]}>DISCOVER RESTAURANTS IN YOUR AREA</Text>

            <Swiper autoplay ={true} style ={{height:300,marginTop:40}}>
              <View style ={styles.slide1}>
                <Image 
                        source ={{uri:"https://bit.ly/3I49dka"}}
                        style ={{height:"100%", width:"100%",resizeMode:'cover'}}
                />
              </View>  

              <View style ={styles.slide2}>
                <Image 
                        source ={{uri:"https://bit.ly/3qoVSwY"}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>    


              <View style ={styles.slide3}>
                <Image 
                        source ={{uri:"https://bit.ly/3FrqceP"}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>

              <View style ={styles.slide3}>
                <Image 
                        source ={{uri:"https://bit.ly/3K7zz6S"}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>

            </Swiper>

            <View style ={{justifyContent:'flex-end',alignItems:'center'}}>

        <View style ={{marginHorizontal:20, marginTop:10}}>
        <TouchableOpacity style={styles.loginBtn} onPress={() =>navigation.navigate('Login')}>
          <Text style={styles.Text}>LOGIN</Text>
        </TouchableOpacity>
        </View>

        <View style ={{marginHorizontal:20, marginTop:10}}>
        <TouchableOpacity style={styles.signBtn} onPress={() =>navigation.navigate('Signup')}>
                <Text style={styles.Text}>REGISTER</Text>
            </TouchableOpacity>
            </View>

        </View>
        </View>

        


    </ScrollView>   

    )
}


const styles = StyleSheet.create({

    contentContainer:{
      flexGrow: 1,
      justifyContent: 'space-between',
      backgroundColor:'beige'
    },

    headBox:{
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:20
    },

    headText: {
        fontSize:27,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom:10
    },

    colors:{
        color:"black",
    },

    slide1: {
      height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
      },
      slide2: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },

      loginBtn: {
        width: 300,
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9F703A",
      },

      Text:{
        fontWeight:"bold",
        fontSize:20,
        fontFamily:'sans-serif-condensed',
      },

      signBtn: {
        width: 300,
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#926C44",
      },

});

export default WelcomeScreen