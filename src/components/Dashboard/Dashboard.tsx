import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const Dashboard = ({ title, text, image, nextPage, navigation, slide }: any) => {
    const handleSkip = () =>{
        navigation.navigate("SignUp")
    }
    return (

        <>
        <ScrollView>

            <View style={styles.main}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/images/logo/logo2.png')}
                        style={styles.logo}
                        />
                </View>
                <View style={styles.mainPic}>
                    <Image source={image} style={styles.img} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.header}>{title}</Text>
                    <Text>{text}</Text>
                </View>
                <View style = {styles.sliderRow}>
                    <Image
                    source={slide} style ={styles.slidee}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={nextPage}>
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skip} onPress={handleSkip}>
                        <Text>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
                    </ScrollView>
        </>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(31,39,50)',
        height: '100%',
        width: '100%',
    },
    logoContainer: {
        width: 30,
        marginStart: 75,
        marginTop: 30,
    },
    logo: {
        width: 200,
        height: 50,
    },
    mainPic: {
        marginTop: 60,
    },
    img: {
        width: 350,
        height: 300,
    },
    content: {
        marginTop: 30,
        marginLeft: 30,
    },
    header: {
        color: '#65C5C2',
        fontSize: 23,
    },
    btn: {
     
        marginLeft: 30,
        backgroundColor: '#65C5C2',
        padding: 10,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',
        marginBottom:10,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
    },
    slidee: {
        width: 80, 
        height: 30, 
        resizeMode: 'contain', 
    },
    sliderRow: {
        alignItems: 'center', 
        marginBottom: 20,
    
    },
    skip:{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 10,
    }
});
