import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import imagepath from '../constant/imagepath'
import colors from '../styles/colors'

const Fallback = () => {
  return (
    <View style={{alignItems:"center",justifyContent:"center"}}>
<Image  source={imagepath.pencil} style={{height:200,width:200,tintColor:colors.themecolor}}/>
<Text style={{marginTop:20,fontWeight:"bold",fontSize:20}}>Start Adding</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})