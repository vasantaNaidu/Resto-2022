import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import RestaurantsMapScreen from '../Screen/RestaurantsMapScreen'
import DrawerNavigator from './DrawerNavigator'
import BookingPage from '../Screen/BookingPage';
import Bookinghistory from '../Screen/Bookinghistory'
import Guestdetails from '../Screen/Guestdetails';


const App = createStackNavigator();

const AppStack = () =>{
    return(
        <App.Navigator screenOptions={{headerShown: false}}>
            <App.Screen name='DrawerNavigator' component={DrawerNavigator} options={TransitionPresets.RevealFromBottomAndroid}/>
            <App.Screen name='RestaurantsMapScreen' component={RestaurantsMapScreen} options={TransitionPresets.RevealFromBottomAndroid}/>
            <App.Screen name='Bookinghistory' component={Bookinghistory} options={TransitionPresets.RevealFromBottomAndroid}/>
            <App.Screen name='Guestdetails' component={Guestdetails} options={TransitionPresets.RevealFromBottomAndroid}/>
        </App.Navigator>
    )
};

export default AppStack;