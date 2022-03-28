import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../Screen/Search';
import SearchResult from '../Screen/SearchResult';
import RestaurantsHomeScreen from '../Screen/RestaurantsHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import BookingPage from '../Screen/BookingPage';


const ClientSearch = createStackNavigator()

export function Clientstack({navigation,route}) {

    useLayoutEffect(()=>{

        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "RestaurantsHomeScreen" && "BookingPage"){
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
        
        },[navigation,route])

  return (
    <ClientSearch.Navigator>
        <ClientSearch.Screen 
            name ="SearchScreen"
            component ={SearchScreen}
            options = {
                ()=>({
                    headerShown:false
                })
        }/>
    
    
        <ClientSearch.Screen 
            name ="SearchResult"
            component ={SearchResult}
            options = {
                ()=>({
                    headerShown:false
                })
        }/>

        <ClientSearch.Screen 
            name ="RestaurantHomeScreen"
            component ={RestaurantsHomeScreen}
            options = {
                ()=>({
                    headerShown:false
                })
        }/>

        <ClientSearch.Screen 
            name ="BookingPage"
            component ={BookingPage}
            options = {
                ()=>({
                    headerShown:false
                })
        }/>

    </ClientSearch.Navigator>
  )
}
