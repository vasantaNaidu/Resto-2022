import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

import { Clientstack } from './Clientstack'
import Myaccount from '../Screen/Myaccount'
import { Home } from '../Screen/Home'

const RootClientTabs = createBottomTabNavigator();


const ClientTabs=({navigation,route})=>{

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
                component ={Clientstack}
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
                        tabBarLabel : "Me",
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