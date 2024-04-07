import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getUserDataFromStorage } from '../../../storage/storage';
import imagepath from '../../constant/imagepath';
import navigationStrings from '../../constant/navigationStrings';
import styles from './style';
const ProfileScreen = ({navigation}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserDataFromStorage();
      setUserData(data);
    };
    fetchData();
  }, []);

  const handleEdit=()=>{
    navigation.navigate(navigationStrings.EDITPROFILE)
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={imagepath.Profile} style={styles.profileImage} />
        <Text style={styles.username}>{userData?.username}</Text>
        <Text style={styles.email}>{userData?.Email}</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
      {/* Add more profile details here */}
    </View>
  );
};



export default ProfileScreen;
