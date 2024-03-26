import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import colors from '../styles/colors'
import imagepath from '../constant/imagepath'

const Buttoncomp = ({ btnText, btnstyle = {}, onPress,img }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}
            style={{ ...styles.btnstyle, ...btnstyle }}>
           {!!img ? <Image source={img} style={{tintColor:"white",width:moderateScale(20),height:moderateScale(20)}}/> :<Text style={styles.btnText}>{btnText}</Text>}
        </TouchableOpacity>

    )
}

export default Buttoncomp

const styles = StyleSheet.create({
    btnstyle: {
        height: moderateScale(48),
        backgroundColor: colors.themecolor,
        borderRadius: moderateScale(4),
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontSize: scale(12),
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
    }
})