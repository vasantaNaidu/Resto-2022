import { StyleSheet, Text, View,TextInput, FlatList, Alert, Linking } from 'react-native'
import React, {useState} from 'react'
import {Button, Icon} from 'react-native-elements'
import { colors } from '../Global/styles'
import {days, restaurantsData, Schedule} from '../Global/Data'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'

const BookingPage = ({navigation,route}) => {

  const {id,rName,raddress} = route.params
  const url ="https://pmny.in/9rQ6D0XnKU96"
  // const link = Linking.openURL(url)
  const [loading, setLoading] = useState(false);
  const [indexCheckDay, setIndexCheckDay] = useState("")
  const [indexCheckTime, setIndexCheckTime] = useState("")
  const [Guestdetails,setGuestdetails] = useState("")
  const [Counter,setCounter] = useState(1);
  const availability = () =>{
    if(!Guestdetails|!setIndexCheckDay|!setIndexCheckTime){
      alert("Error! Enter Guest Details")
    }
    else{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        "Confirm Your Booking",
        "Make Payment?",
        [
          {
            text:"yes", 
            onPress:()=>Linking.openURL(url)
            // navigation.navigate("Guestdetails")

          },
          {
            text:"no",
            onPress:()=>[Alert.alert("Booking Failed!"), navigation.goBack("RestaurantsHomeScreen")]
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

    <View style={styles.container}>
      
      <View style ={styles.view1}>
                <View style ={{alignItems:"center",justifyContent:'center', marginLeft:10}}>
                        <Icon 
                            name ="arrow-left"
                            type = "material-community"
                            color = {colors.black}
                            size = {25}
                            onPress ={()=>navigation.goBack()}
                        />
                        </View>
                        <View style ={{alignItems:"center", justifyContent:"center",marginLeft:10,width:200}}>
                      <Text style={{fontWeight:'bold',fontSize:20}}>Reservation Details</Text>
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

        <Text style={styles.text1}>Step 2: Enter Guest Details</Text>
        <TextInput
        placeholder='Enter Guest Name'
        style={styles.inputView}
        onChangeText={(Guestdetails)=>setGuestdetails(Guestdetails)}
        />
        <TextInput
        placeholder='Enter Menu (if any)'
        style={styles.inputView}/>
        <TextInput
        placeholder='Remarks'
        style={styles.inputView}/>
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
    justifyContent:"center",
    alignContent:"center",
    flex:1,
    paddingTop:30
  },
  view1:{margin:15,
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:'space-between',
    flexDirection:'row'
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
    inputView: {
      width: "80%",
      height: 50,
      paddingTop:10,
      marginLeft:10,
      alignItems: "center",
      borderBottomColor: 'black', 
      borderBottomWidth: 3,
      fontWeight:"bold",
      fontSize:20,
    },
})