import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../../styles/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import imagepath from '../../constant/imagepath'
import Fallback from '../../components/Fallback'
import styles from './style'

const Home = () => {
  const [Todo, setTodo] = useState("")
  const [todoList, settodoList] = useState([])
  const [EditedTodo, setEditedTodo] = useState(null)

  const EditTodo = (item) => {
    setEditedTodo(item)
    setTodo(item.title)
  }
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
  const updatetodo = () => {
    const updatetodo = todoList.map((item) => {
      if (item.id === EditedTodo.id) {
        return { ...item, title: Todo }
      }
      return item
    })
    settodoList(updatetodo);
    setEditedTodo(null);
    setTodo("");
  }
  const renderTodo = ({ item }) => {
    return (
      <View style={styles.maincontain}>
        <Text style={styles.titleview}>{item.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => EditTodo(item)}>
            <Image source={imagepath.pencil} 
            style={styles.imageview} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <Image source={imagepath.bin} style={styles.deleteview} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.homecontain}>
      <TextInput style={styles.inputview}
        placeholder='Add a todo'
        value={Todo}
        onChangeText={(t) => setTodo(t)}
      />
      {EditedTodo ? (
        <TouchableOpacity
          style={styles.btntext}>
          <Text style={styles.btnupdate}
            onPress={() => updatetodo()}
          >save</Text>
        </TouchableOpacity>
      ) : (<TouchableOpacity
        style={styles.addview}>
        <Text style={styles.addtodotext}
          onPress={() => addtodo()}
        >Add</Text>
      </TouchableOpacity>
      )}

      <FlatList data={todoList}
        renderItem={renderTodo}
      />

      {todoList.length <= 0 && <Fallback />}
    </View>
  )
}

export default Home

