import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Scale,verticalScale,moderateScale, scale } from 'react-native-size-matters'

const TextInputwithLabels = ({label,placeholder,onchangeText,
    inputstyle={},...props}) => {
        console.log(inputstyle)
  return (
    <View style={{...styles.inputstyle,...inputstyle}}>
    <Text style={styles.labelstyle}>{label}</Text>
    <TextInput 
    placeholder={placeholder}
    style={styles.inlinestyle}
    />
    </View>
  )
}

export default TextInputwithLabels

const styles = StyleSheet.create({
    inputstyle:{
borderBottomWidth:1,
borderBottomColor:'rgba(0,0,0,.08)',
borderRadius:moderateScale(4)
    },
inlinestyle:{
    paddingVertical:moderateScale(8),
    fontSize:scale(16),
    color:'rgba(0,0,0,0.8)'
},
labelstyle:{
    fontSize:scale(14),
    color:'rgba(0,0,0,0.5)'
}

})