import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'

const dummydata=[{
  id:1,
  title:"Wash car",
},{
  id:2,
  title:"Wash car",
},{
  id:3,
  title:"Wash car",
}]
const Home = () => {
const  renderTodo=({item})=>{
  return(
    <View style={{backgroundColor:colors.blue,borderRadius:moderateScale(6),
    paddingHorizontal:scale(6),paddingVertical:scale(12),marginBottom:12}}>
      <Text style={{color:colors.white,fontSize:moderateScale(20),fontWeight:"800"}}>{item.title}</Text>
    </View>
)
  }
  
  return (
    <View style={{ marginHorizontal: scale(15),marginTop:moderateVerticalScale(10) }}>
      <TextInput style={{
        borderWidth: 2, borderColor: colors.blue, borderRadius: moderateScale(10),
        paddingVertical: 12, paddingHorizontal: 16
      }}
        placeholder='Add a Break'
      />
      <TouchableOpacity
        style={{ backgroundColor: colors.black, borderRadius: 6, paddingVertical: 12, marginVertical: 24, alignItems: "center" }}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>Add</Text>
      </TouchableOpacity>
      <FlatList data={dummydata}
      renderItem={renderTodo}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})