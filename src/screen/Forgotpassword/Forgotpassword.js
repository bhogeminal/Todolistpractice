import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import navigationStrings from '../../constant/navigationStrings';
import styles from './style'; // Import your styles
import TextInputwithLabels from '../../components/TextInputwithLabels';
import Buttoncomp from '../../components/Buttoncomp';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    // Handle sending email logic here
    console.log('Sending email to:', email);
    navigation.navigate(navigationStrings.HOME);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.lockIconContainer}>
          {/* Add lock icon image here */}
          <Text style={styles.lockIconText}>Lock Icon name</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Enter your email address</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInputwithLabels
            label="Email Address"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Buttoncomp
            btnText="SEND"
            onPress={handleSend}
            btnStyle={styles.sendButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
