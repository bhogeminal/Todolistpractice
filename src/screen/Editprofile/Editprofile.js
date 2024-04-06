import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { getUserDataFromStorage } from '../../../storage/storage';

const Editprofile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        // Add other fields as needed
      });
      useEffect(()=>{
fetchdata()
      },[])
    const fetchdata=()=>{
        const data=getUserDataFromStorage()
        setUserData(data)
    }
  return (
    <View>
      <Text>Edit Profile</Text>
      <TextInput
        placeholder="Username"
        value={userData.username}
        onChangeText={(text) => setUserData({ ...userData, username: text })}
      />
      <TextInput
        placeholder="Email"
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })}
      />
      {/* Add other input fields for additional user data */}
      <TouchableOpacity onPress={handleUpdateProfile}>
        <Text>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

  

export default Editprofile

const styles = StyleSheet.create({})