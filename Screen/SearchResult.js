import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React from 'react'
import {colors} from "../Global/styles";
import { restaurantsData } from '../Global/Data';
import SearchResultCard from '../Components/SearchResultCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResult = ({navigation,route}) => {
  return (
    <View style={styles.container}>
        <View>
                <FlatList 
                     style ={{backgroundColor:colors.cardbackground}}
                    data = {restaurantsData}
                    keyExtractor ={(item,index)=>index.toString()}
                    renderItem ={({item,index})=> (

                        <SearchResultCard
                            screenWidth = {SCREEN_WIDTH}
                            images = {item.image}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberOfReview}
                            restaurantName ={item.restaurantName}
                            farAway ={item.farAway}
                            businessAddress ={item.businessAddress}
                            OnPressRestaurantCard ={()=>{navigation.navigate("RestaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}
                        />
                                    
                          )}

                     ListHeaderComponent ={
                        <View style={{paddingTop:20}}>
                            <Text style ={styles.listHeader}>{restaurantsData.length} Result for {route.params.item}</Text>
                        </View>
                     }   

                     showsVerticalScrollIndicator ={false}
                />
            </View>
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },

    listHeader:{
        color :colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
}
})