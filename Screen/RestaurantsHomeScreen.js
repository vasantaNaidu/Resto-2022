import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import {colors , fonts} from '../Global/styles'
import {restaurantsData, menu } from '../Global/Data'
import RestaurantHeader from '../Components/RestaurantHeader'
import { Icon } from 'react-native-elements'
import { TouchableOpacity} from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import { Linking } from 'react-native'



const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

const RestaurantsHomeScreen = ({navigation,route}) => {

  const {id,restaurant} = route.params

  return (
    <View style={styles.container}>
      <ScrollView
      
      showsVerticalScrollIndicator = {true}>
        <View>
        <RestaurantHeader id ={id} navigation ={navigation} />
                     {/* {restaurantsData[id].discount &&
                     <View style ={styles.view1}>
                        <Text style ={styles.text1}>GET {restaurantsData[id].discount}% OFF ON BOOKING</Text>
                     </View>
                     } */}
                     <View style ={styles.view2}>
                    <View style ={styles.view3}>
                        <Text style ={styles.text2}>{restaurantsData[id].restaurantName}</Text>
                        <Text style ={styles.text3}>{restaurantsData[id].foodType}</Text>
                        <View style ={styles.view4}>
                            <Icon name ="star" type ="material-community" color = {colors.grey3} size = {15} />
                            <Text style ={styles.text4}>{restaurantsData[id].averageReview}</Text>
                            <Text style ={styles.text5}>{restaurantsData[id].numberOfReview}</Text>
                            <Icon name ="map-marker" type ="material-community" color = {colors.grey3} size = {15} />
                            <Text style ={styles.text6}>{restaurantsData[id].farAway} min away</Text> 
                        </View>
                    </View>
                    
                </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("BookingPage")}}>
          <View style = {styles.BookNow}>
                    <Image source={require('./logo.png')} style = {styles.logo}/>
                <Text style = {styles.text7}>Book a Table {'\n'}Get instant confirmation</Text>
                <Icon name ="arrow-right-circle" type ="material-community" color = {colors.grey3} size = {30} iconStyle ={{marginLeft:40}}/>
              </View>
        </TouchableOpacity>
        
        <View style = {styles.view5}>
            <Text style = {styles.text8}>About the restaurant</Text>

            <Text style={styles.text9}>{restaurantsData[id].rinfo}</Text>

            <Swiper autoplay ={true} style ={{height:300,marginTop:20}}>
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
          
          <View style={{flexDirection:'column', paddingLeft:20}}>
            <View style={{flexDirection:'row'}}>
              <Icon name ="clock" type ="material-community" color = {colors.grey3} size = {30} />
              <Text style={styles.text9}>{restaurantsData[id].time}</Text>
              <TouchableOpacity onPress={()=>{Linking.openURL('tel:{restaurantsData[id].tel}');}}>
                <Icon name ="phone-in-talk" type ="material-community" color = {colors.grey3} size = {30} iconStyle ={{marginLeft:180}}/>
              </TouchableOpacity> 
              </View>
            <View style={{flexDirection:'row'}}>
            <Icon name ="currency-inr" type ="material-community" color = {colors.grey3} size = {30} />
            <Text style={styles.text9}>{restaurantsData[id].approx}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Icon name ="food-fork-drink" type ="material-community" color = {colors.grey3} size = {30} />
            <Text style={styles.text9}>{restaurantsData[id].foodType}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Icon name ="map-marker-outline" type ="material-community" color = {colors.grey3} size = {30} />
            <Text style={styles.text9}>{restaurantsData[id].businessAddress}</Text>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.google.co.in/maps/place/R+City+Mall/@19.0999164,72.9093627,15z/data=!4m5!3m4!1s0x3be7c7cb91a08e4b:0x10408c61181384c3!8m2!3d19.0996843!4d72.9163939');}}>
              <Icon name = "directions" type ="material-community" color = {colors.grey3} size = {33} iconStyle ={{marginLeft:95}}/>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.view6}>
              <Text style={styles.text8}>Menu</Text>
              <Text style={styles.text10}>POPULAR DISHES</Text>
              <FlatList 
              showsHorizontalScrollIndicator ={false}
              horizontal ={true}
              data={menu}
              keyExtractor={(item)=>item.key}
              renderItem={({item}) => {
                return (<View style={styles.smallCard}>
                  <Text>{item.title}</Text>
                </View>
                )}} />
              <Text style={styles.text10}>FULL MENU</Text>
              <Image source={{uri:'https://bit.ly/3CT8LDX'}} style={{height:100,width:200,margin:20,resizeMode:'cover'}} />
          </View>
        </View>


        </View>
      </ScrollView>
      
    </View>
  )
}

export default RestaurantsHomeScreen

const styles = StyleSheet.create({
container : {
    justifyContent:"center",
    alignContent:"center",
    flex:1,
    paddingTop:30
},
 
view1:{
  padding:3,
  alignItems:"center",
  justifyContent:"center"
},

text1:{color:"green",
fontSize:20,
fontWeight:"bold"
},

view2:{ 
  flexDirection:"row",
  flex:1,
  marginBottom:5,
  marginHorizontal:10,
  justifyContent:"space-between",
  marginTop:10
  },

view3:{flex:8,
    },

text2:{fontSize:20,
  fontWeight:"bold",  
  color:colors.grey1
},

text3:{fontSize:15,
  color:colors.grey3
},

view4:{flexDirection:'row',
  alignItems:"center",
  marginTop:5
  },

text4:{fontFamily :fonts.android.bold,
  fontSize:13,
  color:colors.grey3,
  marginLeft:2,
  },

text5:{fontFamily :fonts.android.bold,
  fontSize:13,
  color:colors.grey3,
  marginLeft:2,
  marginRight:5
  },
text6:{fontFamily :fonts.android.bold,
    fontSize:13,
    color:colors.grey3,
    marginLeft:0,
    },

text7:{
  marginLeft:15,
  fontSize:17,
    fontWeight:"bold",
    color:colors.grey1
  },

  BookNow: {
    marginTop:10,
    width:"90%",
    height:70,
    backgroundColor:colors.grey5,
    borderRadius:12,
    borderWidth:1,
    borderColor:colors.grey4,
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:10,
    alignSelf:'center'
}, 

  view5:{ 
    flex:3,
    marginTop : 20,
    
    borderWidth:1,
    width:"100%",
    height:"50%",
    alignSelf:'center'
  },
  
  logo : {
    height:50,
    width :50
  },
  
  text8:{fontSize:19,
    fontWeight:"bold",
    color:colors.black,
    margin:15
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

    text9:{fontSize:16,
      fontWeight:"bold",
      color:colors.grey3,
      textAlign:'center'
    },

    view6:{
    flex:3,
    marginTop : 20,
    
    borderWidth:1,
    width:"100%",
    height:"50%",
    alignSelf:'center'
    },

    text10:{
      fontSize:16,
      fontWeight:"bold",
      color:colors.grey3,
      marginLeft:20,
      marginTop:10
    },

    smallCard :{
      borderRadius:20,
      backgroundColor:colors.grey5,
      justifyContent:'space-evenly',
      alignContent:'space-around',
      alignItems:'center',
      padding:5,
      width:100,
      margin:8,
      height:30,
      marginTop:10
    },

// view8:{flex:3,
//     alignItems:"center"
//   },

// view9:{width:40,
//   height:40,
//   backgroundColor:colors.buttons,
//   alignItems:"center",
//   borderRadius:20,
//   justifyContent:"space-around",
// },

// text10:{fontSize:16,
//   fontWeight:"bold",
//   color:colors.cardbackground,
//   marginTop:5
//   },

// text11:{fontSize:13,
//     color:colors.cardbackground,
//     marginBottom:5
//   },

// view10:{elevation:10,
//    backgroundColor:colors.pagebackground
//   },

// view11:{backgroundColor:colors.buttons,
//     height:50,
//     alignContent:"center",
//     marginBottom:0,
//     justifyContent:"center"
    
// },

// view12:{flexDirection:"row",
//     justifyContent:"space-between",
//     alignItems:"center"
//     },

// text12:{padding:10,
//     fontWeight:"bold",
//     fontSize:18,
//     color:colors.cardbackground
//   },

// view13:{ borderWidth:1,
//     marginRight:10,
//     borderColor:colors.cardbackground,
//     borderRadius:6,
//     paddingBottom:2
//   },

// text13:{paddingHorizontal:3,
//     fontWeight:"bold",
//     fontSize:18,
//     color:colors.cardbackground,
//   },

// tab:{ paddingTop :0,
//   backgroundColor:colors.buttons,
//   justifyContent:"space-between",
//   alignItems:"center"
//   },

// tabContainer:{ alignItems:'center',
//   alignContent:'center',
//   justifyContent:'center',
//   },

// tabLabel:{fontWeight:'bold',
//   color: colors.cardbackground
//   },

// tabStyle:{width:SCREEN_WIDTH/4,
//       maxHeight:45,
//     },

// view14:{flexDirection:"row",
// alignItems:"center",
// padding:10,
// backgroundColor:colors.buttons,
// top:0,
// left:0,
// right:0,
// paddingTop:25
// },

// text14:{fontWeight:"bold",
//     marginLeft:40,
//     color:colors.black,
//     fontSize:18
// },

// view15:{marginTop:5,
//     paddingBottom:20
// },  


})