import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    profileHeader: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    username: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
    },
    email: {
      fontSize: 16,
      color: 'gray',
      marginTop: 5,
    },
    editButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    editText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  export default styles