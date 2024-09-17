import { ScrollView } from 'react-native-gesture-handler';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Social from '../../components/SignIn/Social';

const SignUp = ({ navigation }: any) => {

    const emailPage = () => {
        navigation.navigate("Email")
    }
    const handleLogin = () => {
        navigation.navigate("LoginPage")
    }
    return (
        <View style={styles.main}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo/logo2.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.txt}>
                <Text style={styles.header}>Let’s Signup With</Text>
            </View>
            <View style={styles.main}>
                <Social social='Instagram' image={require('../../assets/images/socialmedia/insta.png')} />
                <Social social='Tiktok' image={require('../../assets/images/socialmedia/tiktok.png')} />
                <Social social='Facebook' image={require('../../assets/images/socialmedia/fb.png')} />
                <Social social='Twitter' image={require('../../assets/images/socialmedia/twitter.png')} />
                <Social social='Apple' image={require('../../assets/images/socialmedia/apple.png')} />
                <Social social='Google' image={require('../../assets/images/socialmedia/google.png')} />
                <View style={{ display: 'flex', alignItems: "center", marginTop: 5 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>

                        <View style={styles.line} />
                        <Text style={{ color: 'grey', fontSize: 14 }}>or Sign up With</Text>
                        <View style={styles.line} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.logo2} onPress={emailPage}>

                        <Text style={styles.btnText}>Signup with Email</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnn}>
                    <Text style={{
                        color: '#FFFFFF',
                    }}>Already have an Account?</Text>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.loginText}> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUp;

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
        paddingBottom: 30,
    },
    logo: {
        width: 200,
        height: 50,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
    },
    txt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    logo2: {
        backgroundColor: '#1F222A',
        width: '90%',
        height: 62,
        marginLeft: "5%",
        borderRadius: 16,
        flexDirection: 'row',
        gap: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        borderColor: '#65C5C2',
        borderWidth: 1,
    },
    btnText: {
        fontWeight: "bold",
        color: '#FFFFFF',

    },
    btnn: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginText: {
        color: '#65C5C2',
        fontWeight: 'bold',
    },
    line: { 
        backgroundColor: 'grey',
        width: 70,
        height: 1,
        top:10,
    },
});
