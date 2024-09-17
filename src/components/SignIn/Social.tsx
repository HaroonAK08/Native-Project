import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Social = ({ social, image }: any) => {
  const nextPage = () => {
  };
  
  return (
    <View>
      <TouchableOpacity style={styles.logo} onPress={nextPage}>
        <Image source={image} style={styles.icon} />
        <Text style={styles.btnText}>Continue with {social}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#1F222A',
    width: '90%',
    height: 58,
    marginLeft: "5%",
    borderRadius: 16,
    flexDirection: 'row',
    gap: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnText: {
    fontWeight: "bold",
    color: '#FFFFFF',
  },
  icon: {
    width: 24, 
    height: 24, 
    resizeMode: 'contain',
  }
});

export default Social;
