import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUserDataFromStorage, saveUserDataToStorage } from '../../../storage/storage';

const Editprofile = () => {
    const [userData, setUserData] = useState({
        username: '',
        Email: '',
        // Add other fields as needed
    });
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async() => {
        const data =await getUserDataFromStorage();
        console.log("/////",data)
        if(data && data.username){
            try {
                setUserData(data)
                console.log("userdata", userData)
            }
            catch (error) {
                console.log(error)
            }
        }
       else{
        console.log("userdata is null")
       }
       

    }
    const handleUpdateProfile = async () => {
        try{
        const data=    await saveUserDataToStorage()
            setUserData(data)
            console.log(userData)
        }
      catch(error){
console.error(error)
      }

    }
    return (
        <View>
            <Text>Edit Profile</Text>
            <TextInput
                placeholder="Username"
                value={userData?.username}
                onChangeText={(text) => setUserData({ ...userData, username: text })}
            />
            <TextInput
                placeholder="Email"
                value={userData?.Email}
                onChangeText={(text) => setUserData({ ...userData, Email: text })}
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