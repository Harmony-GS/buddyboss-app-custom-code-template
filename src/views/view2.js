import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Vista2 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/background.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/Layer.png')} 
          style={styles.logo}
        />
        <Text style={styles.text}>Welcome</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain', 
  },
  text: {
    fontSize: 24,
    marginTop: 20, 
  },
});

export default Vista2;
