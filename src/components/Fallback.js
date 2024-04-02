import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import imagepath from '../constant/imagepath'
import colors from '../styles/colors'

const Fallback = () => {
  return (
    <View style={styles.container}>
<Image  source={imagepath.pencil} style={styles.imgview}/>
<Text style={styles.textview}>Start Adding</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({

  container:{alignItems:"center",justifyContent:"center"},
  imgview:{height:200,width:200,tintColor:colors.themecolor},
  textview:{marginTop:20,fontWeight:"bold",fontSize:20}
})