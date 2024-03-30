// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todoText }]);
      setTodoText('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter todo"
          value={todoText}
          onChangeText={setTodoText}
          style={styles.input}
        />
        <TouchableOpacity onPress={addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTodo(item.id)} style={styles.todoItem}>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  todoItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default Home;
