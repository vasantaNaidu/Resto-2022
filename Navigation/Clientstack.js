import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../Screen/Search';
import SearchResult from '../Screen/SearchResult';

const ClientSearch = createStackNavigator()

export function Clientstack() {
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

    </ClientSearch.Navigator>
  )
}
