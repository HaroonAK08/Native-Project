// import { View, TextInput, Button, StyleSheet, Text, Alert, Image, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react'
// import FormField from '../../components/Form/FormField';

// const Email = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSignup = () => {

//   }
//   // if (password !== confirmPassword) {
//   //   Alert.alert('Error', 'Passwords do not match');
//   // } else {
//   //   Alert.alert('Success', 'Registration Successful');
//   // }
//   function handleRegister() {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <View style={styles.main}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../../assets/images/logo/logo2.png')}
//           style={styles.logo}
//         />
//       </View>
//       <View>

//       <FormField
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={setFirstName}
//         keyboardType="default"
//       />
//       <FormField
//         placeholder="Last Name"
//         value={lastName}
//         onChangeText={setLastName}
//         keyboardType="default"
//       />      </View>
//       <View>
//         <TouchableOpacity onPress={handleSignup}>
//           <Text> Signup</Text>
//         </TouchableOpacity>
//       </View>



//     </View>
//   )
// }

// export default Email

// const styles = StyleSheet.create({
//   main: {
//     backgroundColor: 'rgb(31,39,50)',
//     height: '100%',
//     width: '100%',
//   },
//   logoContainer: {
//     width: 30,
//     marginStart: 75,
//     marginTop: 40,
//   },
//   logo: {
//     width: 200,
//     height: 50,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
// })
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormField from '../../components/Form/FormField'; // Adjust the import path as necessary

const Email = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text>Email Address</Text>
      <FormField
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Email;
