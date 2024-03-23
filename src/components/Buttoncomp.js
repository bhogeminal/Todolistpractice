import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import colors from '../styles/colors'

const Buttoncomp = ({ btnText, btnstyle = {}, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}
            style={{ ...styles.btnstyle, ...btnstyle }}>
            <View style={{ ...styles.btnstyle, ...btnstyle }}>
                <Text style={styles.btnText}>{btnText}</Text>
            </View>
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