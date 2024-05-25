import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import *as Speech from 'expo-speech';



const index = () => {


    const [text,setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Text To Speech</Text>
      <TextInput
      style={styles.input}
      onChangeText={(text)=>setText(text)}
      value={text}
      />
    <TouchableOpacity 
    style={styles.button}
    onPress={()=>{
      Speech.speak(text);
    }}
    
    >
      <Text style={styles.buttonText}>
        SPEAK
      </Text>
    </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ff01',
        justifyContent:'center',
    },
    input:{
      height:40,
      borderColor:'green',
      borderWidth:2,
      borderRadius:10,
      margin:10,
      padding:10,
      width:'80%',
    },

    button:{
      backgroundColor:"green",
      paddingVertical:10,
      paddingHorizontal:20,
      borderRadius:10,
      margin:10,
    },

    buttonText:{
      color:"white",
      fontWeight:'bold',
      fontSize:20,
    },

})