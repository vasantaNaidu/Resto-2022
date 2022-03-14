import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Authnavigator from './Authnavigator'
import AppStack from './AppStack';
import { SignInContext } from '../contexts/authContext';

const Rootnavigator =()=>
{
    const {signedIn} = useContext(SignInContext)
    return(
        <NavigationContainer>
            {signedIn.userToken === null  ?  <Authnavigator />: <AppStack />}
        </NavigationContainer>
    )   
};

export default Rootnavigator