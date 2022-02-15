import React,{useState,useRef} from 'react'
import { AppRegistry,StyleSheet, Text, View,TouchableWithoutFeedback,
     Modal,TextInput,FlatList,TouchableOpacity,Keyboard, ImageBackground, 
     SafeAreaView, Dimensions, Image } from 'react-native'
import Animatable from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {colors} from "../Global/styles"
import { filterData } from '../Global/Data';
import filter from 'lodash/filter'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchComponent (){

    const navigation  = useNavigation();

    const [data, setData] =  useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFossued,setTextInputFossued] = useState(true)
    const textInput = useRef(0)

    const contains = ({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }
    
    
    const handleSearch = text =>{
        const dataS = filter(filterData, userSearch =>{
            return contains(userSearch,text)
        })
    
        setData([...dataS])
    }

  return (
    <View style = {{marginTop:20}}>
        
            <ImageBackground source ={require('../assets/bgHome1.png')} style={styles.image}/>
            <TouchableWithoutFeedback onPress ={()=>{setModalVisible(true)}}>
                <View style = {styles.SearchArea}>
                <Text style ={{fontSize:15, marginLeft:30}}>Search</Text>
                     <Icon name =  "search"   
                            style = {styles.searchIcon} 
                            type ="material"
                            iconStyle ={{marginLeft:240}}
                            size = {32}     
                            />
                     
                </View>
            </TouchableWithoutFeedback>
        

            <Modal
            animationType = "fade"
            transparent = {false}
            visible = {modalVisible}
            >
                <View style ={styles.modal}>
                    <View style = {styles.view1}>
                        <View style ={styles.TextInput}>
                            <Animatable.View 
                                    animation = {textInputFossued?"fadeInRight":"fadeInLeft"}
                                    duration = {400}
                                    >
                            <Icon name = {textInputFossued ? "arrow-back" : "search" }  
                                onPress = {()=>{
                                        if(textInputFossued)
                                        setModalVisible(false)
                                        setTextInputFossued(true)
                                            }}
                                    style = {styles.icon2} 
                                    type  ="material"
                                    iconStyle ={{marginRight:5}}
                                />
                            </Animatable.View>

                            <TextInput 
                                style ={{width:"90%"}}
                                placeholder =""
                                autoFocus = {false}
                                ref = {textInput}

                                onFocus = {()=>{
                                    setTextInputFossued(true)
                                }} 

                                onBlur = {()=>{
                                    setTextInputFossued(false)
                                }}

                                onChangeText ={handleSearch}
                            />

                            <Animatable.View
                                     animation = {textInputFossued?"fadeInLeft":""}
                                    duration = {400}
                                    >
                            <Icon 
                                name = {textInputFossued ? "cancel" : null } 
                                iconStyle ={{color:colors.grey3}}
                                type ="material"
                                style={{marginRight:-10}}
                                onPress ={()=>{
                                        textInput.current.clear()           
                                }}
                            />
                            </Animatable.View>
                        </View>
                    </View>
                </View>

        <FlatList
            style={{backgroundColor:'beige'}}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity 
                       onPress = {() =>{

                            Keyboard.dismiss
                            navigation.navigate("SearchResult",{item:item.name})
                            setModalVisible(false)
                            setTextInputFossued(true)
                                }} >
                    <View style={styles.view2}>
                        <Text style={{color:colors.grey2, fontSize:20 }}>{item.name}</Text>
                    </View>
              </TouchableOpacity>
                )}
            keyExtractor={item => item.id}

        />
            </Modal>
    </View>

    
  );
}


const styles = StyleSheet.create({
    container :{
        flex:1
    },

    text1:{
        color:colors.grey3,
        fontSize:16
    },

    TextInput:{
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:0,
         borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-evenly",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:10,
         paddingRight:10,
         height:50
  
      },

    SearchArea:{
        marginTop :250,
        marginLeft:10,
        width:"94%",
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10
      },

    searchIcon:{ fontSize:24,
                  padding:5,
                  color:colors.grey2,
      },

    view1:{ height:100,
            justifyContent:"center",
            
            paddingHorizontal:10,
      },

    view2:{
      
      padding: 10,
      alignItems: 'center',
      marginLeft:5,
      
      
    },

    icon2 :{ fontSize:24,
            padding:5,
            color:colors.grey2,
    },
    modal :{
        flex:1,
        backgroundColor:'beige'
    
    },

    image: {
        height: SCREEN_WIDTH, width: SCREEN_WIDTH, position: 'absolute', top:0, left:0 
      },

})
