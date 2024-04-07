import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { getUserDataFromStorage, saveUserDataToStorage } from '../../../storage/storage';
import styles from './style';
const EditProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        // Add other fields as needed
    });

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const data = await getUserDataFromStorage();
            if (data && data.username) {
                setUserData(data);
            } else {
                console.log("User data not found");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    const handleUpdateProfile = async () => {
        try {
            await saveUserDataToStorage(userData);
            console.log("User data updated successfully");
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={userData?.username}
                onChangeText={(text) => setUserData({ ...userData, username: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={userData?.email}
                onChangeText={(text) => setUserData({ ...userData, email: text })}
            />
            {/* Add other input fields for additional user data */}
            <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditProfile