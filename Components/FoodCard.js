import React, {useCallback} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';
import { Linking } from 'react-native'

import {
  Icon
} from 'react-native-elements';

import {colors, parameters} from '../Global/styles';


export default function FoodCard({
    restaurantName,
    numberOfReview ,
    businessAddress ,
    averageReview ,
    images,
    screenWidth,
    addresslink,
    onpressFoodCard
}){

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
              <Icon 
              name ="map-marker-outline" 
              type ="material-community" 
              color = {colors.grey3} 
              size = {25} 
              iconStyle ={{
                            margin:15
                        }} />
          </TouchableOpacity>
        )};

    return(
        <TouchableOpacity onPress={onpressFoodCard}>
            <View style ={{...styles.cardView,width:screenWidth}}>
                <Image 
                    style ={{...styles.image, width:screenWidth}}
                    source = {{uri:images}}
                />

            <View>
                <View>
                    <Text style ={styles.restaurantName}>{restaurantName}</Text>
                </View>

                <View style ={{flex:1, flexDirection:"row",borderColor:colors.grey4}}>

                    <View style ={{borderRightColor:colors.grey4,borderRightWidth:2}}>
                        <OpenURLButton url={addresslink}/>
                    </View>

                    <View style ={{flex:10, flexDirection:"row"}}>
                        <Text style ={styles.address}>{businessAddress}</Text>
                    </View>

                </View>
            </View>

            </View>

         


            <View style ={styles.review}>
                   <Text style ={styles.average}>{averageReview}</Text>   
                   <Text style ={styles.numberOfReview}>{numberOfReview} reviews</Text>  
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
        cardView:{
            marginHorizontal:9,
            borderTopRightRadius:5,
            borderTopLeftRadius:5,
            borderWidth:1,
            borderColor:colors.grey4,
            borderBottomLeftRadius:5,
            borderBottomRightRadius:5,
        },
         image:{
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            height:150,
         },

         restaurantName:{
            fontSize:17,
            fontWeight:'bold',
            color:colors.grey1,  
            marginTop:5,
            marginLeft:10
         },

        //  distance :{
        //     flex:4,flexDirection:'row',
        //     borderRightColor:colors.grey4,
        //     paddingHorizontal:1,
        //     borderRightWidth:1
        //  },
         Min:{
            fontSize:12,
            fontWeight:'bold',
            paddingTop:5,
            color:colors.grey3 
         },

         address:{
            fontSize:12,
            paddingTop:5,
            color:colors.grey2,
            paddingHorizontal:10
         },

         review :{
            position:"absolute",
            top:0,
            right:10,
            backgroundColor:'rgba(52, 52, 52,0.3)',
            padding:2,alignItems:"center",
            justifyContent:"center", 
            borderTopRightRadius:5,
            borderBottomLeftRadius:12 
         },

         average:{
            color:"white",
             fontSize:20,
              fontWeight:'bold',
               marginTop:-3  
         },
         numberOfReview :{
            color:"white", 
            fontSize:13,
            marginRight:0,
            marginLeft:0
         }
})