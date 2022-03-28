import React from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {View, Dimensions, StyleSheet} from 'react-native'

export default function RestaurantsMapScreen(){
    return(
        <View style ={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <MapView style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}/>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})
