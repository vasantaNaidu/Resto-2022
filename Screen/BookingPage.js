import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import {Button, Icon} from 'react-native-elements'
import { colors } from '../Global/styles'
import {restaurantsData} from '../Global/Data'
import DatePicker from 'react-native-datepicker'


const BookingPage = ({navigation,id}) => {

  // const {id,restaurant} = route.params
  const [date, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
   const [isDisplayDate, setShow] = useState(false);

 const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};

const display = () => {
  showMode('date')
}

  return (
    <View style={styles.container}>
      <View style ={styles.view2}>
                        <Icon 
                            name ="arrow-left"
                            type = "material-community"
                            color = {colors.black}
                            size = {25}
                            onPress ={()=>navigation.goBack()}
                        />
        </View>
        <Text style={styles.text1}>Restaurnat's Name</Text>
        <Text style={styles.text2}>Restaurnat's address</Text>
        <Text style={styles.text1}>Select Data And Time</Text>
        
        <View style ={{justifyContent:'center', alignItems:'center'}}>
          <Button onPress={display} title="Show date picker!"/>
          {isDisplayDate && (
                  <DatePicker
                     testID="dateTimePicker"
                     value={date}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={setDate}
            />
         )}
        </View>
        
    </View>
  )
}

export default BookingPage

const styles = StyleSheet.create({
  container:{
    height:80,
    marginTop:30
  },
  view2:{margin:10,
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    
   },
   text1:{
    margin:15,
    marginLeft:30,
    fontSize:20,
    fontWeight:"bold"
   },
   text2:{
    margin:2,
    marginLeft:30,
    fontSize:15,
    fontWeight:"200"
   },
})