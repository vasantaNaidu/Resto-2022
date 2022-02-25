import React, {useState} from 'react';
import {StatusBar, StyleSheet, View,Text, TouchableOpacity, FlatList, Pressable, Image, Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HomeHeader from '../Components/HomeHeader';
import {colors,paremeters} from '../Global/styles'
import {Icon} from 'react-native-elements'
import {filterData, restaurantsData} from '../Global/Data'
import FoodCard from '../Components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width

export const Home = ({navigation}) => {

  const [indexCheck, setIndexCheck] = useState("0")

  return(
    <View style ={styles.container}>

              <StatusBar
                translucent
                barStyle='dark-content'
                backgroundColor="#926C44"
             />

    <HomeHeader navigation ={navigation}/>
    
      <ScrollView
      stickyHeaderIndices = {[0]}
      showsVerticalScrollIndicator = {true}>

      <View>
          <View  style ={{backgroundColor:colors.cardbackground}}> 
             <View style ={{marginTop:10, marginBottom:10, flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity
                        onPress ={()=>{
                            navigation.navigate("RestaurantsMapScreen")
                        }}
                    >
                    <View style ={{...styles.LocateButton,backgroundColor:colors.grey5}}>
                        <Text style ={styles.LocateText}>Locate Nearby</Text>
                    </View>
                </TouchableOpacity>
       
              </View>
            </View>
        </View>

        
    <View style ={styles.filterView}>
        <View style={styles.addressView}>
            <View style ={{flexDirection:"row",alignItems:"center",paddingLeft:10}}>
                <Icon 
                    type = "material-community"
                    name ="map-marker"
                    color = {colors.grey1}
                    size = {26}
                />

                <Text style ={{marginLeft:5}}>22 Beessie Street</Text>
            </View>

            <View style ={styles.clockView}>
                <Icon 
                    type = "material-community"
                    name ="clock-time-four"
                    color = {colors.grey1}
                    size = {26}
                />

                <Text style ={{marginLeft:5}}>Now</Text>
            </View>

        </View>

        <View>
             <Icon 
                    type = "material-community"
                    name ="tune"
                    color = {colors.grey1}
                    size = {26}
                />
        </View>
        </View>

        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Browse Mumbai by Food</Text>
        </View>

        <View>
          <FlatList horizontal ={true}
                showsHorizontalScrollIndicator ={false}
                data = {filterData}
                keyExtractor = {(item)=>item.id}
                extraData = {indexCheck}
                renderItem = {({item,index})=>(
                    <Pressable
                            onPress ={()=>{setIndexCheck(item.id)}}
                        >
                        <View style ={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                            <Image 
                                style = {{height:60,width:60,borderRadius:30}}
                                source = {item.image}
                            />

                            <View>
                                <Text style ={indexCheck === item.id ? {...styles.smallCardTextSected}:
                                {...styles.smallCardText}}>{item.name}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
            />
        </View>

        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Top Restaurants</Text>
        </View>

        <View>
          <FlatList
          style ={{marginTop:10, marginBottom:10}} 
          horizontal ={true}
          data = {restaurantsData}
          keyExtractor = {(item,index)=>index.toString()}   
          showsHorizontalScrollIndicator = {false}
          renderItem = {({item})=>(
              <View style ={{marginRight:5}}>
                  <FoodCard 
                      screenWidth  ={SCREEN_WIDTH*0.8}
                      images = {item.image}
                      restaurantName ={item.restaurantName}
                      farAway ={item.farAway}
                      businessAddress ={item.businessAddress}
                      averageReview ={item.averageReview}
                      numberOfReview ={item.numberOfReview}
                      
                  />
              </View>
            )}  
          />
  
        </View>

        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Restaurants in your Area</Text>
        </View>

        <View style ={{width:SCREEN_WIDTH,paddingTop:10}}>
        { 
            restaurantsData.map(item =>(
                <View key ={item.id} style = {{paddingBottom:20}}>
                <FoodCard 
                           screenWidth  ={SCREEN_WIDTH*0.95}
                           images ={item.image}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.businessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           
                       />
                </View>
            )
            )
        }        
    </View>    

    </ScrollView> 

  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:30
    },

    LocateButton:{
      paddingHorizontal:20,
       borderRadius:15,
       paddingVertical:10,
  },

  LocateText:{
      marginLeft:5,
      fontSize:16
  },
  
  filterView:{
    flexDirection:"row" ,
    alignItems:"center", 
    justifyContent:"space-evenly",
    marginHorizontal:10,
    marginVertical:10
  },

  clockView:{
    flexDirection:"row",
    alignItems:'center',
    marginLeft:20,
    backgroundColor:colors.cardbackground,
    borderRadius:15,
    paddingHorizontal:5,
    marginRight:20
  },

  addressView:{
  flexDirection:"row",             
  backgroundColor:colors.grey5,
  borderRadius:15,
  paddingVertical:8,
  justifyContent:"space-between",
  paddingHorizontal:20
  },

  headerText:{
    color:colors.grey2,
    fontSize:25,
    fontWeight:"bold",
    paddingLeft:10,
},
  headerTextView:{
    backgroundColor:colors.grey5,
    paddingVertical:3,
},

smallCard :{
  borderRadius:30,
  backgroundColor:colors.grey5,
  justifyContent:"center",
  alignItems:'center',
  padding:5,
  width:100,
  margin:10,
  height:100
},

smallCardSelected:{
  borderRadius:30,
  backgroundColor:colors.buttons,
  justifyContent:"center",
  alignItems:'center',
  padding:5,
  width:100,
  margin:10,
  height:100
},

smallCardTextSected :{
  fontWeight:"bold",
  color:colors.cardbackground
},

smallCardText :{
  fontWeight:"bold",
  color:colors.grey2
},

  })