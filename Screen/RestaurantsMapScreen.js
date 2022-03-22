import React, {useState, useEffect} from 'react'
import MapView from 'react-native-maps'
import {View, Dimensions, StyleSheet, Text, Alert} from 'react-native'
import * as Location from 'expo-location'


export default function RestaurantsMapScreen(){

    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'Wait, we are fetching you location...'
  );

  useEffect(() => {
    CheckIfLocationEnabled();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Service not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };
    // const [mapRegion, setmapRegion] = useState({
    //     latitude: 37.78825,
    //     longitude: -122.4324,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   });

    // const [longitude, setLongitude] = useState(null);
    // const [latitude, setLatitude] = useState(null);

    // const [status, requestPermission] = Location.useForegroundPermissions();

    // if(status !=='granted') {
    //   setErrorMsg('Permission to access location was denied');
    //   return;
    // }

//  async function GetGeolocation () {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert(
//             "Permission not granted",
//             "Allow the app to use location service.",
//             [{ text: "OK" }],
//             { cancelable: false }
//           );
//       }

//       let  { coords } = await Location.getCurrentPositionAsync({
//         latitude,
//         longitude
//       });
//       const { latitude, longitude } = coords;
    
   
//   }

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }
    return(
        <View style ={{flex:1, alignItems:'center',justifyContent:'center'}}>
            {/* <MapView style={styles.map}
                    region={mapRegion}/> */}
            <Text style={styles.paragraph}>{displayCurrentAddress}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})
