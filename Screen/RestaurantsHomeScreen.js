import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList} from 'react-native'
import React, {useCallback} from 'react'
import {colors} from '../Global/styles'
import {restaurantsData, menu, filterData2, reviewHighlights, Review } from '../Global/Data'
import RestaurantHeader from '../Components/RestaurantHeader'
import { Icon, Avatar } from 'react-native-elements'
import { TouchableOpacity} from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import { Linking } from 'react-native'
import { phonecall } from 'react-native-communications'

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

const RestaurantsHomeScreen = ({navigation,route}) => {

  const {id,restaurant} = route.params
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <TouchableOpacity title= {children} onPress={handlePress}>
          <Icon name ="map-marker-outline" type ="material-community" color = {colors.grey3} size = {25} />
      </TouchableOpacity>
    )};

  return (
    <View style={styles.container}>
      <ScrollView
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator = {true}>
        <View> 
        <RestaurantHeader navigation ={navigation} />
        </View>
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
                            {/* <Icon name ="map-marker" type ="material-community" color = {colors.grey3} size = {15} />
                            <Text style ={styles.text6}>{restaurantsData[id].farAway} min away</Text>  */}
                        </View>
                    </View>
                    
                </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("BookingPage",{id:restaurantsData[id].id,rName:restaurantsData[id].restaurantName,raddress:restaurantsData[id].businessAddress})}}>
                       <View style = {styles.BookNow}>
                        <Image source={require('./logo.png')} style = {styles.logo}/>
                        <Text style = {styles.text7}>Book a Table {'\n'}Get instant confirmation</Text>
                        <Icon name ="arrow-right-circle" type ="material-community" color = {colors.grey3} size = {30} iconStyle ={{marginLeft:40}}/>
                        </View>
                      </TouchableOpacity>
        
        <View style = {styles.view5}>
            <Text style = {styles.text8}>About the restaurant</Text>

            <Text style={styles.text12}>{restaurantsData[id].rinfo}</Text>

            <Swiper autoplay ={true} style ={{height:300,marginTop:20}}>
              <View style ={styles.slide1}>
                <Image 
                        source ={filterData2[0].images}
                        style ={{height:"100%", width:initialLayout,resizeMode:'cover'}}
                />
              </View>  

              <View style ={styles.slide2}>
                <Image 
                        source ={filterData2[1].images}
                        style ={{height:"100%", width:initialLayout}}
                />
              </View>    


              <View style ={styles.slide3}>
                <Image 
                        source ={filterData2[2].images}
                        style ={{height:"100%", width:initialLayout}}
                />
              </View>

              <View style ={styles.slide3}>
                <Image 
                        source ={filterData2[3].images}
                        style ={{height:"100%", width:initialLayout}}
                />
              </View>

            </Swiper>
          
            <View style={{flexDirection:'column', paddingLeft:20}}>
                <View style={{flexDirection:'row', margin:3}}>
                    <Icon name ="clock" type ="material-community" color = {colors.grey3} size = {25} />
                    <Text style={styles.text9}>{restaurantsData[id].time}</Text>
                    <TouchableOpacity onPress={()=> phonecall(restaurantsData[id].tel.toString(),true)}>
                    <Icon name ="phone-in-talk" type ="material-community" color = {colors.grey3} size = {25} iconStyle ={{marginLeft:130}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', margin:3}}>
                    <Icon name ="currency-inr" type ="material-community" color = {colors.grey3} size = {25} />
                    <Text style={styles.text9}>{restaurantsData[id].approx}</Text>
                </View>

                <View style={{flexDirection:'row', margin:3}}>
                    <Icon name ="food-fork-drink" type ="material-community" color = {colors.grey3} size = {25} />
                    <Text style={styles.text9}> {restaurantsData[id].foodType}</Text>
                </View>

                <View style={{flexDirection:'row', margin:3}}>
                    <OpenURLButton url={restaurantsData[id].addresslink}/>
                    <Text style={styles.text9}>{restaurantsData[id].businessAddress}</Text>
                </View>

            </View>
          </View>
        
          <View style={styles.view5}>
              <Text style={styles.text8}>Menu</Text>
              <Text style={styles.text10}>POPULAR DISHES</Text>
              <FlatList 
                  showsHorizontalScrollIndicator ={false}
                  horizontal ={true}
                  data={menu}
                  keyExtractor={(item)=>item.key}
                  renderItem={({item}) => {
                    return (<View style={styles.smallCard}>
                      <Text style={styles.text11}>{item.title}</Text>
                    </View>
                )}} />
              <Text style={styles.text10}>FULL MENU</Text>
                  <Image 
                  source={{uri:'https://bit.ly/3CT8LDX'}} 
                  style={{height:100,width:200,margin:20,resizeMode:'cover'}} /> 
          </View>

          <View style={styles.view6}>
                  <Text style={styles.text8}>What people say</Text>
                  <Text style={styles.text10}>Review Highlights</Text>
                  <FlatList 
                  showsHorizontalScrollIndicator ={false}
                  horizontal ={true}
                  data={reviewHighlights}
                  keyExtractor={(item)=>item.key}
                  renderItem={({item}) => {
                    return (<View style={styles.smallCard}>
                      <Text style={styles.text11}>{item.title}</Text>
                    </View>
                )}} />
                <FlatList 
                  showsHorizontalScrollIndicator ={false}
                  horizontal ={true}
                  data={Review}
                  keyExtractor={(item)=>item.key}
                  renderItem={({item}) => {
                    return (<View style={styles.ReviewCard}>
                      <View style={styles.avatar}>
                      <Avatar 
                        rounded
                        // avatarStyle ={styles.avatar}
                        size = {40}
                        source = {item.img}/>
                      <Text style={styles.text13}>{item.reviewer}</Text>
                      </View>
                      <Text style={styles.text11}>{item.des}</Text>
                    </View>
                )}} />

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
  marginLeft:18,
  marginBottom:5,
  marginHorizontal:10,
  justifyContent:"space-between",
 
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

  fontSize:13,
  text4:{
  color:colors.grey3,
  marginLeft:2,
  },

text5:{
  fontSize:13,
  color:colors.grey3,
  marginLeft:2,
  marginRight:5
  },
text6:{
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
    alignSelf:'center',
  },
  view6:{ 
    flex:3,
    marginTop : 20,
    borderWidth:1,
    width:"100%",
    height:"50%",
    alignSelf:'center',
    marginBottom:30
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

    text9:{
      fontSize:15,
      fontWeight:"bold",
      color:colors.grey3,
      textAlign: 'justify',
      paddingRight:70
    },

    text12:{
      fontSize:15,
      fontWeight:"bold",
      color:colors.grey3,
      textAlign: 'justify',
      padding:15
    },

    text13:{
      fontSize:15,
      fontWeight:"bold",
      color:colors.grey3,
      textAlign: 'justify',
      padding:15,
    },

    avatar:{
      flexDirection:'row',
      marginTop:5,
      marginBottom:5
    },

    // view6:{
    // flex:3,
    // marginTop : 20,
    // borderWidth:1,
    // width:"100%",
    // height:"50%",
    // alignSelf:'center'
    // },

    text10:{
      fontSize:14,
      fontWeight:"bold",
      color:colors.grey3,
      marginLeft:20,
      marginTop:5
    },

    smallCard :{
      borderRadius:10,
      backgroundColor:'#dcdcdc',
      justifyContent:'space-evenly',
      alignContent:'space-around',
      alignItems:'center',
      padding:5,
      maxWidth:150,
      margin:8,
      height:30,
      marginTop:10
    },
    ReviewCard :{
      borderRadius:10,
      backgroundColor:'#dcdcdc',
      justifyContent:'space-evenly',
      alignContent:'space-around',
      alignItems:'center',
      padding:5,
      maxWidth:250,
      margin:8,
      height:100,
      marginTop:10
    },

    text11:{
      fontSize:12,
      fontWeight:"bold",
      color:'black'
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