import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import RestaurantsMapScreen from '../Screen/RestaurantsMapScreen'
import DrawerNavigator from './DrawerNavigator'

const App = createStackNavigator();

const AppStack = () =>{
    return(
        <App.Navigator screenOptions={{headerShown: false}}>
            <App.Screen name='DrawerNavigator' component={DrawerNavigator} options={TransitionPresets.RevealFromBottomAndroid}/>
            <App.Screen name='RestaurantsMapScreen' component={RestaurantsMapScreen} options={TransitionPresets.RevealFromBottomAndroid}/>
        </App.Navigator>
    )
};

export default AppStack;