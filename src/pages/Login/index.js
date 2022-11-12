import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IlBackground} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';

export default function Login({navigation}) {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        setLoading(false);
        Fire.database()
          .ref(`user/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(error => {
        setLoading(false);
        showError(error.message);
      });
  };
  return (
    <>
      <ImageBackground style={styles.page} source={IlBackground}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>Kitab Biru</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Input
            secureTextEntry
            value={form.password}
            onChangeText={value => setForm('password', value)}
            label="Password"
          />
          <Gap height={32} />
          <Button onPress={login} title="Masuk" />
          <View style={styles.register}>
            <Text style={styles.link}>Tidak Punya Akun? </Text>
            <Link
              onPress={() => navigation.navigate('Register')}
              title="Daftar"
            />
          </View>
        </View>
      </ImageBackground>
      {loading && <Loading />}
    </>
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
