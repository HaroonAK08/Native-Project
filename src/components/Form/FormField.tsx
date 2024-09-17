// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'

// const FormField = () => {
//   const [name, setName] = useState('')
//   return (
//     <View style ={styles.field}>
//       <TextInput
//         style={styles.input}
//         placeholder="First Name"
//         value={name}
//         onChangeText={setName}
//         keyboardType= 'default'
//       />
//     </View>
//   )
// }

// export default FormField

// const styles = StyleSheet.create({
//   input: {
//     height: 50,
//     borderColor: '#141C27',
//     width: '90%',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 16,
//     backgroundColor:'#141C27'
//   },
//   field:{
//     display: 'flex',
//     alignItems: 'center',
//   }
// })
import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const FormField = ({ placeholder, value, onChangeText, keyboardType = 'default' }: any) => {
  return (
    <View style={styles.field}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#141C27',
    width: '90%',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: '#141C27',
    color: '#fff', // Add this to ensure text is visible on dark background
  },
  field: {
    display: 'flex',
    alignItems: 'center',
  },
});
