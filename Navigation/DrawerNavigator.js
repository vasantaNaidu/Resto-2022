import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClientTabs from './Clienttabs';
import {Icon} from 'react-native-elements';
import {colors} from "../Global/styles";
import BusinessConsoleScreen from '../Screen/BusinessConsoleScreen';
import DrawerContent from '../Components/DrawerContent';
import Settings from '../Screen/Settings';

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{

    return(
        <Drawer.Navigator drawerContent  = {props =><DrawerContent {...props} /> }
         screenOptions={{headerShown:false}}>
            <Drawer.Screen 
                name = "ClientTabs"
                component ={ClientTabs}

                options = {{
                    title:'Home',
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material-community"
                            name = "home"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}

                        />
                    )
                }}
            />

            <Drawer.Screen 
                name = "Business consoleScreen"
                component ={BusinessConsoleScreen}

                options = {{
                    title:'Admin Console',
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material"
                            name = "business"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}

                        />
                    )
                }}
            />

            <Drawer.Screen 
                name = "Settings"
                component ={Settings}

                options = {{
                    title:'Settings',
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material-community"
                            name = "cog-outline"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}

                        />
                    )
                }}
            />
            

        </Drawer.Navigator>
    )}

export default DrawerNavigator;