import { View, TextInput, Button, StyleSheet, Text, Alert, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    
    const handleSignup = () =>{
        
    }
    // if (password !== confirmPassword) {
    //   Alert.alert('Error', 'Passwords do not match');
    // } else {
    //   Alert.alert('Success', 'Registration Successful');
    // }
    function handleRegister(){
        throw new Error('Function not implemented.');
    }

    return (
        <View style={styles.main}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo/logo2.png')}
                    style={styles.logo}
                />
            </View>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignup}>
<Text> Signup</Text>
      </TouchableOpacity>
    </View>
  



        </View>
    )
}

export default Form

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
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
})