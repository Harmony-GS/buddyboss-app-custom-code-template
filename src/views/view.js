import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Vista1 = () => {
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
        <Text style={styles.text1}>Love Drops</Text>
        <Text style={styles.text2}>By Living Harmony</Text>
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
  text1: {
    fontSize: 24,
    marginTop: 20, 
    fontFamily:'TommySoftLight',
    color:'white'
  },
  text2: {
    fontSize: 24,
    marginTop: 20, 
    fontFamily:'TommySoftLight'
  },
});

export default Vista1;
