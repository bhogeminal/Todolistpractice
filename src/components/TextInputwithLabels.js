import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Scale, verticalScale, moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters'
import colors from '../styles/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const TextInputwithLabels = ({ label, placeholder, onchangeText,value,
    inputstyle = {}, rightIcon, onPressRight, ...props }) => {
    console.log(onPressRight)
    
      
    return (
        <View style={{ ...styles.inputstyle,...inputstyle }}>
            <Text style={styles.labelstyle}>{label}</Text>
            <View style={styles.flexview}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.inlinestyle}
                    {...props}
                 value={value}
                 onchangeText={onchangeText}
                />
                {!!rightIcon ?
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={onPressRight}
                    >
                        <Image source={rightIcon} style={styles.eyestyle} />

                    </TouchableOpacity> : null}
            </View>
        </View>
    )
}

export default TextInputwithLabels

const styles = StyleSheet.create({
    inputstyle: {
        borderBottomWidth: 1,
        borderBottomColor:colors.borderColor,
        borderRadius: moderateScale(4),
    },
    inlinestyle: {
        paddingVertical: moderateVerticalScale(8),
        fontSize: scale(16),
        color: colors.blackopacity80,
        flex:1
    },
    labelstyle: {
        fontSize: scale(14),
        color: colors.blackopacity50
    },
    flexview:
        { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    eyestyle: {width: moderateScale(20),height:moderateScale(20), tintColor:colors.black30 }
})