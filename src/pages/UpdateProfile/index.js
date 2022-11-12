import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import {IconRemovePhoto} from '../../assets';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, showError, storeData} from '../../utils';

export default function UpdateProfile({navigation, route}) {
  const {fullName, email, profession, telp, photo, uid} = route.params;

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [photoAvatar, setPhotoAvatar] = useState(photo);
  const [photoForDB, setPhotoForDB] = useState(photo);
  const [profile, setProfile] = useState({
    fullName: fullName,
    email: email,
    profession: profession,
    telp: telp,
    photo: photoForDB,
    uid: uid,
  });

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      {
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
        quality: 0.5,
      },
      response => {
        if (response.didCancel || response.errorCode) {
          showError('Ups, anda belum pilih photo');
        } else {
          const source = response.assets[0].uri;
          setPhotoForDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhotoAvatar(source);
        }
      },
    );
  };

  const updateData = () => {
    setLoading(true);
    if (password > 0) {
      if (password < 6) {
        showError('Ups, password kurang dari 6 karakter');
      } else {
        updatePassword();
        updateProfileData();
        setLoading(false);
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      setLoading(false);
      navigation.replace('MainApp');
    }
  };

  const updatePassword = () => {
    const user = Fire.auth().currentUser;
    user.updatePassword(password).catch(err => {
      showError(err.message);
    });
  };
  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    Fire.database()
      .ref(`user/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data);
      })
      .catch(err => {
        showError(err.message);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title="Profile" onPress={() => navigation.goBack()} />
          <View>
            <TouchableOpacity onPress={getImage} style={styles.profile}>
              <View style={styles.wrapAvatar}>
                <Image style={styles.avatar} source={{uri: photoAvatar}} />
                <IconRemovePhoto style={styles.iconRemove} />
              </View>
            </TouchableOpacity>
            <Gap height={26} />
            <View style={styles.input}>
              <Input
                value={profile.fullName}
                onChangeText={value => changeText('fullName', value)}
                label="Full Name"
              />
              <Input
                value={profile.profession}
                onChangeText={value => changeText('profession', value)}
                label="Profession"
              />
              <Input value={profile.email} label="Email" disable />
              <Input
                keyboardType="number-pad"
                value={profile.telp}
                onChangeText={value => changeText('telp', value)}
                label="No. Hp"
              />
              <Input
                secureTextEntry
                value={password}
                onChangeText={value => setPassword(value)}
                label="Password"
              />
              <Gap height={40} />
              <Button onPress={updateData} title="Simpan Profile" />
              <Gap height={20} />
            </View>
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  profile: {
    alignItems: 'center',
  },
  wrapAvatar: {
    borderWidth: 1,
    borderColor: colors.border,
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 130 / 2,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  iconRemove: {
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
  input: {
    paddingHorizontal: 40,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
