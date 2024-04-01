import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../../styles/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import imagepath from '../../constant/imagepath'


const dummydata = [{
  id: 1,
  title: "Wash car",
}, {
  id: 2,
  title: "Wash car",
}, {
  id: 3,
  title: "Wash car",
}]
const Home = () => {
  const [Todo, setTodo] = useState("")
  const [todoList, settodoList] = useState([])

  const addtodo = () => {
    console.log("add");
    if (Todo !== '')
      settodoList([...todoList, { id: Date.now().toString(), title: Todo }])
    setTodo('')
  }
  const deleteTodo = (id) => {
    console.log("id", id)
    const updatelist = todoList.filter((todo) => todo.id !== id)
    settodoList(updatelist)
  }

  const renderTodo = ({ item }) => {
    return (
      <View style={{
        backgroundColor: colors.blue, borderRadius: moderateScale(6), justifyContent: "space-between",
        paddingHorizontal: scale(6), paddingVertical: scale(12), marginBottom: 12, flexDirection: "row", paddingHorizontal: scale(10)
      }}>
        <Text style={{ color: colors.white, fontSize: moderateScale(20), fontWeight: "800" }}>{item.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => editTodo()}>
            <Image source={imagepath.pencil} style={{ width: moderateScale(20), height: moderateScale(20), alignSelf: "center", marginHorizontal: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <Image source={imagepath.bin} style={{ width: moderateScale(20), height: moderateScale(20), alignSelf: "center" }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={{ marginHorizontal: scale(15), marginTop: moderateVerticalScale(10) }}>
      <TextInput style={{
        borderWidth: 2, borderColor: colors.blue, borderRadius: moderateScale(10),
        paddingVertical: 12, paddingHorizontal: 16
      }}
        placeholder='Add a todo'
        value={Todo}
        onChangeText={(t) => setTodo(t)}
      />
      <TouchableOpacity
        style={{ backgroundColor: colors.black, borderRadius: 6, paddingVertical: 12, marginVertical: 24, alignItems: "center" }}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
          onPress={() => addtodo()}
        >Add</Text>
      </TouchableOpacity>
      <FlatList data={todoList}
        renderItem={renderTodo}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})