import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IlBackground} from '../../assets';
import {Button, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

export default function Login() {
  return (
    <ImageBackground style={styles.page} source={IlBackground}>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>Kitab Biru</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button title="Masuk" />
        <View style={styles.register}>
          <Text style={styles.link}>Tidak Punya Akun? </Text>
          <Link title="Daftar" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapTitle: {
    alignItems: 'center',
    marginTop: 110,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.primary[800],
    color: colors.white,
  },
  container: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 21,
    paddingTop: 7,
  },
  text: {
    marginBottom: 9,
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginTop: 10,
  },
  register: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  link: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
