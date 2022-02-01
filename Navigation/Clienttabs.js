import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

import Search from '../Screen/Search'
import Myaccount from '../Screen/Myaccount'
import { Home } from '../Screen/Home'

const RootClientTabs = createBottomTabNavigator();


const ClientTabs=()=>{

    return(
        <RootClientTabs.Navigator screenOptions={{headerShown: false}}>
            <RootClientTabs.Screen 
                name ="Home"
                component ={Home}
                options ={
                    {
                        tabBarLabel : "Home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

            <RootClientTabs.Screen 
                name ="Search"
                component ={Search}
                options ={
                    {
                        tabBarLabel : "Search",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='search'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

            <RootClientTabs.Screen 
                name ="Myaccount"
                component ={Myaccount}
                options ={
                    {
                        tabBarLabel : "Search",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

        </RootClientTabs.Navigator>
    )
};

export default ClientTabs;