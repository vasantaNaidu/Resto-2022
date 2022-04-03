import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Avatar, Icon} from 'react-native-elements'
   import {colors} from '../Global/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Myaccount = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style = {styles.avatarprop}>
                    <Avatar 
                        rounded
                        avatarStyle ={styles.avatar}
                        size = {90}
                        source = {{uri:"https://bit.ly/3GjVRz1"}}
                        
                    />

                    <View style ={{marginLeft:10}}>
                        <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:25 }} >Komi San</Text>
                        <Text style ={{color:colors.cardbackground,fontSize:15}} > kittysan@gmail.com</Text>
                    </View>

          </View>

          <View style={styles.view2}>
              <TouchableOpacity style={{alignSelf:'flex-start'}} onPress={()=>{navigation.navigate("Bookinghistory")}}>
                <View style={{flexDirection:'row'}}>
                  <Icon name ="book-account" type ="material-community" color = {colors.grey3} size = {30}/>
                  <Text style={{fontSize:20, paddingLeft:15}}>View Booking History</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{flexDirection:'row', paddingTop:30}}>
                  <Icon name ="heart" type ="material-community" color = {colors.grey3} size = {30}/>
                  <Text style={{fontSize:20, paddingLeft:15}}>My Favourites</Text>
                 </View>
               </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default Myaccount;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    paddingTop:10
  },
  view1:{ 
    flex:1,
    marginTop : 20,
    width:"100%",
  },
  avatarprop:{
    flexDirection:'row', 
    alignItems:'center',
    backgroundColor:colors.buttons,
    padding:30
  },
  view2:{ 
    flex:2,
    padding:30,
    width:"100%",
    height:"50%",
  },
});
