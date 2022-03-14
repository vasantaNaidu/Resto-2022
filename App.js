import React from 'react'
import { SignInContextProvider } from './contexts/authContext';
import Rootnavigator from './Navigation/Rootnavigator'


const App =()=>
 {
  return (
    <SignInContextProvider>
        <Rootnavigator/>
    </SignInContextProvider>
  )
};

export default App;