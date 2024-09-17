import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('DashboardOne');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/logo/image.png')}
                    style={styles.image}
                    resizeMode="contain" 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(31,39,50)',
    },
    imageContainer: {
        width: '70%',  
        height: '50%',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%', 
        height: '100%', 
    },
});

export default SplashScreen;
