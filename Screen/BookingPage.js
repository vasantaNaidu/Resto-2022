import { StyleSheet, Text, View, Dimensions, FlatList, Presable, Alert } from 'react-native'
import React, {useState} from 'react'
import {Button, Icon} from 'react-native-elements'
import { colors } from '../Global/styles'
import {days, restaurantsData, Schedule} from '../Global/Data'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'

const BookingPage = ({navigation,route}) => {

  const {id,rName,raddress} = route.params
  const [loading, setLoading] = useState(false);
  const [indexCheckDay, setIndexCheckDay] = useState("0")
  const [indexCheckTime, setIndexCheckTime] = useState("0")
  const [Counter,setCounter] = useState(1);
  const availability = () =>{
    if(!setIndexCheckDay|!setIndexCheckTime){
      alert("Error! Select Date and Time")
    }
    else{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        "",
        "Available: 50",
        [
          {
            text:"okay", 
            onPress:()=>{
              
              navigation.navigate("Guestdetails")}
          }
        ]
        )
    }, 3000);
  } 
  }

  const incrementCounter = () => setCounter(Counter + 1);
  let decrementCounter = () => setCounter(Counter - 1);
  if(Counter<=1) {
    decrementCounter = () => setCounter(1);
  }

  return (
  <View>
    <View style={styles.container}>
      <View style ={styles.view1}>
                        <Icon 
                            name ="arrow-left"
                            type = "material-community"
                            color = {colors.black}
                            size = {25}
                            onPress ={()=>navigation.goBack()}
                        />
        </View>
        </View>
      <ScrollView 
      showsVerticalScrollIndicator = {true} >
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={loading}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={styles.text1}>{restaurantsData[id].restaurantName}</Text>
        <Text style={styles.text2}>{restaurantsData[id].located}</Text>
        
        <Text style={styles.text1}>Step 1: Select Data And Time</Text>
        <Text style={styles.text1}>What Day?</Text>
       <View style={{margin:5,marginLeft:5}}>
          <FlatList 
                  showsHorizontalScrollIndicator ={false}
                  horizontal ={true}
                  data={days}
                  keyExtractor={(item)=>item.key}
                  extraData = {indexCheckDay}
                  renderItem={({item}) => {
                    return (
                    <TouchableOpacity onPress={()=>{setIndexCheckDay(item.key)}}>
                      <View style= {indexCheckDay === item.key ? {...styles.CardSelected}:{...styles.Card}}>
                      <Text style={styles.text3}>{item.title}</Text>
                    </View>
                     </TouchableOpacity>
                )}} />

        </View>
        <Text style={styles.text1}>What Time?</Text>
        <View style={{margin:5,marginLeft:5}}>
        <FlatList 
                  showsHorizontalScrollIndicator ={false}
                  horizontal ={true}
                  data={Schedule}
                  keyExtractor={(item)=>item.key}
                  extraData={indexCheckTime}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity onPress={()=>{setIndexCheckTime(item.key)}}>
                      <View style= {indexCheckTime === item.key ? {...styles.CardSelected}:{...styles.Card}}>
                      <Text style={styles.text3}>{item.title}</Text>
                    </View>
                    </TouchableOpacity>  
                )}} />
        </View>
        <Text style={styles.text1}>How many People?</Text>
        <View style={{flexDirection:'row', justifyContent:'center',marginTop:5, marginBottom:10}}>
               <Icon
               name="minus"
               type = "material-community"
                            color = {colors.black}
                            size = {35}
                            onPress = {decrementCounter}
               />
               <Text style={styles.qtybox}>{Counter}</Text>
               <Icon
               name="plus"
               type = "material-community"
                            color = {colors.black}
                            size = {35}
                            onPress = {incrementCounter}
               />  
               <View>
                 { Counter >= 2?
                              (<Icon
                              name='account-multiple'
                              type='material-community'
                              color={colors.black}
                              size={35}/>):
                              (<Icon 
                                name ='person'
                                type = 'material'
                                color ={colors.black}
                                size ={35}
                            />)

                  }    
                </View>     
        </View>
          <View style={styles.view2}>
              <TouchableOpacity style={styles.availabilitybox} onPress={availability}>
                 <Text style={{fontSize:20}}>Check Availability</Text>
              </TouchableOpacity>
          </View>
        
      </ScrollView>
    </View>
  )
}

export default BookingPage

const styles = StyleSheet.create({
  container:{
    height:80,
    marginTop:30
  },
  view1:{margin:10,
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"center",
   },
   text1:{
    margin:10,
    marginLeft:15,
    fontSize:20,
    fontWeight:"bold"
   },
   text2:{
    margin:2,
    marginLeft:30,
    fontSize:15,
    fontWeight:"200"
   },
   Card:{
    borderRadius:10,
    backgroundColor:'#dcdcdc',
    justifyContent:'space-evenly',
    alignContent:'space-around',
    alignItems:'center',
    width:130,
    margin:8,
    height:50,
   },
   CardSelected:{
    borderRadius:10,
    backgroundColor:colors.buttons,
    justifyContent:"space-evenly",
    alignContent:'space-around',
    alignItems:'center',
    width:130,
    margin:8,
    height:50
  },
   text3:{
    fontSize:15,
    fontWeight:"bold",
    color:'black'
    },
    qtybox: { 
      borderTopWidth: 2, 
      borderBottomWidth: 2, 
      borderColor: '#cccccc', 
      color: 'black', 
      fontSize: 20,
      width:50,
      height:40,
      paddingLeft:14,
      paddingTop:5
    },
    view2:{
      justifyContent:'center',
      margin:20,
      marginLeft:90
    },
    availabilitybox:{
      width:'80%',
      height:50,
      borderRadius:5,
      backgroundColor:colors.buttons,
      alignItems:'center',
      justifyContent:'center'
    },
    spinnerTextStyle: {
      color: 'black',
    },
})