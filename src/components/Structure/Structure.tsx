import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Structure = () => {
    return (
        <View style={styles.main}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={styles.logo}
                />
            </View>
        </View>
    )
}

export default Structure

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(31,39,50)',
        height: '100%',
        width: '100%',
    },
    logoContainer: {
        width: 30,
        marginStart: 75,
        marginTop: 40,
    },
    logo: {
        width: 200,
        height: 50,
    },
})