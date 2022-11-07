import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

export default function Register({navigation}) {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Register</Text>
      <Input label="Full Name" />
      <Input label="Profession" />
      <Input label="Email" />
      <Input label="No. Hp" />
      <Input label="Password" />
      <Gap height={32} />
      <Button
        onPress={() => navigation.navigate('UploadPhoto')}
        title="Daftar"
      />
      <View style={styles.masuk}>
        <Text style={styles.link}>Sudah Punya Akun? </Text>
        <Link onPress={() => navigation.navigate('Login')} title="Masuk" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    padding: 40,
    flex: 1,
  },
  text: {
    marginBottom: 9,
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
  },
  masuk: {
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
