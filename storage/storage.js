import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserDataToStorage = async (userData) => {
    try {
      if(userData){
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log(userData)
      }
      else
        console.log("cannot save user data")
      
    } catch (error) {
      console.error('Error saving user data to AsyncStorage:', error);
    }
  };
  
 export const getUserDataFromStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
    }
    
    catch (error) {
      console.error('Error getting user data from AsyncStorage:', error);
      return null;
    }
  };
 export const logout = async () => {
    try {
      // Clear user data from AsyncStorage and set user to null
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
