import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';

export default function Register({navigation}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    telp: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        console.log(success);
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          telp: form.telp,
          uid: success.user.uid,
        };
        Fire.database().ref(`user/${success.user.uid}/`).set(data);
        storeData('user', data);
        navigation.replace('UploadPhoto', data);
        setForm('reset');
      })
      .catch(err => {
        setLoading(false);
        showError(err.message);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>Register</Text>
          <Input
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
            label="Full Name"
          />
          <Input
            value={form.profession}
            onChangeText={value => setForm('profession', value)}
            label="Profession"
          />
          <Input
            value={form.email}
            onChangeText={value => setForm('email', value)}
            label="Email"
          />
          <Input
            value={form.telp}
            onChangeText={value => setForm('telp', value)}
            label="No. Hp"
            keyboardType="number-pad"
          />
          <Input
            secureTextEntry
            value={form.password}
            onChangeText={value => setForm('password', value)}
            label="Password"
          />
          <Gap height={32} />
          <Button title="Daftar" onPress={onContinue} />
          <View style={styles.masuk}>
            <Text style={styles.link}>Sudah Punya Akun? </Text>
            <Link onPress={() => navigation.navigate('Login')} title="Masuk" />
          </View>
          <Gap height={40} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    paddingHorizontal: 40,
    paddingTop: 40,
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
