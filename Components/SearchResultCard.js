import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React,{useCallback} from 'react'
import {Icon} from 'react-native-elements'
import { Linking } from 'react-native'
import {colors} from "../Global/styles";

const SearchResultCard = ({
    OnPressRestaurantCard,
    restaurantName,
    numberOfReview ,
    businessAddress ,
    averageReview ,
    images,
    addresslink
  

}) => {

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
              iconStyle ={{ margin:20  }} />
          </TouchableOpacity>
        )};

  return (
    <View style={{paddingBottom:20}}>
        <TouchableOpacity onPress ={OnPressRestaurantCard}>
            <View style ={styles.view1}>
                <View style ={{height:150}}>
                    <ImageBackground 
                        style = {{height:160}}
                        source ={{uri:images}}
                        imageStyle = {styles.imageStyle}
                    />

                    <View style ={styles.image}>                
                        <Text style ={styles.text1}>{averageReview}</Text>
                        <Text style ={styles.text2}> {numberOfReview} reviews</Text>
                    </View>

                </View>


                <View style ={styles.view3}>
                    <View style ={{paddingTop:5}}>
                         <Text style ={styles.text5}>{restaurantName}</Text>    
                        </View>
            
            <View style ={{flexDirection:"row",borderBottomWidth:2,borderColor:colors.grey4}}>
                <View style ={{borderRightColor:colors.grey4,borderRightWidth:2}}>
                    <OpenURLButton url={addresslink}/>
                </View>
                <View style ={{flex:9}}>
                    <Text style ={styles.text6}>{businessAddress}</Text>
                </View>
                
            </View>
            
        </View>

      
    </View>
  
    </TouchableOpacity>
    {/* <View style ={{marginTop:5,paddingBottom:20}}>

    <FlatList
        style ={{backgroundColor:colors.cardbackground}}
        data = {productData}
        keyExtractor ={(item,index)=>index.toString()}
        renderItem ={({item,index})=> (
                    <ProductCard 
                    image = {item.image}
                    productName ={item.name}
                    price ={item.price}
                      />
        )}
        horizontal ={true}
    />
       
    </View> */}


</View>
  )
}

export default SearchResultCard

const styles = StyleSheet.create({
    view1: {
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderColor:2,
        },
        
        image: {position:"absolute",
                top:0,
                right:0,
                backgroundColor:'rgba(52, 52, 52,0.4)',
                padding:2,
                alignItems:"center",
                justifyContent:"center", 
                borderTopRightRadius:5,
                borderBottomLeftRadius:12
        },
      
        imageStyle:{borderTopLeftRadius:5,
                    borderTopRightRadius:5,
                  },
        
        text1:{color:"white",
              fontSize:20,
              fontWeight:'bold',
              marginTop:-3
          },
      
        text2 : {color:"white",
                  fontSize:13,
                  marginRight:0,
                  marginLeft:0
                },
      
        view2 : { flexDirection:"row",
                  justifyContent:"space-between",
                  alignItems:"center",
                  marginTop:-5
                  },
        text3:{
                fontSize:10,
                fontWeight:'bold',
                color:colors.grey2,
             },
      
        text4:{
                fontSize:10,
                fontWeight:'bold',
                color:colors.grey2,
                },
        view3:{ flexDirection:"column",
                marginHorizontal:5,
                marginBottom:10,
                marginLeft:0,
                marginTop:5
              },
      
        text5:{
            fontSize:20,
            fontWeight:'bold',
            color:colors.grey1,
        },
      
        view4 :{flex:4,
                flexDirection:"row",
                borderRightWidth:1,
                borderRightColor:colors.grey4,
                paddingHorizontal:5,

              } ,
      
        view5:  {
          fontSize:12,
          fontWeight:'bold',
          paddingTop:5,
          color:colors.grey3
          },
          
        text6:{
          fontSize:12,
          paddingTop:5,
          color:colors.grey2,
          paddingHorizontal:10,
          
          }
})