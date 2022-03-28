import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Icon, Avatar} from 'react-native-elements'
import { colors } from '../Global/styles'
import { TextInput } from 'react-native-gesture-handler';


const Settings = ({navigation}) => {
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
        <Text style={styles.text1}>Settings</Text>
      <View style={styles.view1}>
        <Text style={styles.text2}>Edit Profile</Text>
        <View style={styles.view3}>
            <Avatar
            rounded
            avatarStyle ={styles.avatar}
            size = {150}
            source = {{uri:"https://bit.ly/3GjVRz1"}}/>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
        <Icon 
            name ="camera"
            type = "material-community"
            color = {colors.black}
            size = {30}
            />
        <Text>Add Image</Text>
        </View>
        
        <View style={{paddingTop:15}}>
          <View style={{marginBottom:15}}>
          <TextInput placeholder="Change Your Name"
            placeholderTextColor="#003f5c">Change Your Name</TextInput>
          </View>
          
          <View style={{marginBottom:15}}>
          <TextInput placeholder="Phone Number"
            placeholderTextColor="#003f5c">Phone Number</TextInput>
          </View>
          
          <View style={{marginBottom:15}}>
          <TextInput placeholder="Email Address"
            placeholderTextColor="#003f5c">Email</TextInput>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container:{
    height:80,
        marginTop:30,
        
  },
  view2:{margin:10,
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    
   },
   text1:{
    margin:15,
    marginLeft:20,
    fontSize:20,
    fontWeight:"bold"
   },
   view1:{
    margin:20,
     marginLeft:20,
     
   },
   text2:{
     fontSize:15, 
   },
   view3:{
     backgroundColor:'#d3d3d3',
     width: 150,
    height: 150,
    borderRadius: 150 / 2,
    justifyContent:'center',
    alignSelf:'center',
    
   },
   avatar:{
        alignSelf:'center',
        borderColor:colors.pagebackground,
        resizeMode:'cover',
   },
});
