import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserDataFromStorage } from '../../../storage/storage';
const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to retrieve user data from AsyncStorage
    const getUserData = async () => {
      try {
        const userDataFromStorage = await getUserDataFromStorage();
        if (userDataFromStorage) {
          // If user data exists in AsyncStorage, set it to state
          setUserData(userDataFromStorage);
        }
        console.log("userDataFromStorage",userDataFromStorage)
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    getUserData(); // Call the function to retrieve user data
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {userData ? (
        <>
          <Text>User Profile</Text>
          <Text>Username: {userData.username}</Text>
          <Text>Email: {userData.Email}</Text>
          {/* Display other user information as needed */}
        </>
      ) : (
        <Text>No user data found.</Text>
      )}
    </View>
  );
};

export default Profile;
