import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {fonts} from '../../utils';
import {IconLogo} from '../../assets';
import {Fire} from '../../config';

export default function Splash({navigation}) {
  useEffect(() => {
    const unSubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      }, 1000);
    });
    return () => unSubscribe();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <IconLogo />
      <Text style={styles.text}>KitabBiru</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 17,
  },
});
