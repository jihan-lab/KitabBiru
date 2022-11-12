import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IlNullPhoto} from '../../assets';
import {Gap, Header, List} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, getData, showError} from '../../utils';

export default function UserProfile({navigation}) {
  const [photoProfile, setPhotoProfile] = useState('');
  const [user, setUser] = useState([]);

  useEffect(() => {
    getDataFromLocal();
  }, [user]);

  const getDataFromLocal = () => {
    getData('user').then(res => {
      if (res.photo) {
        setUser(res);
        setPhotoProfile({uri: res.photo});
      } else {
        setUser(res);
        setPhotoProfile(IlNullPhoto);
      }
    });
  };

  const logout = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => {
        showError(error.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.wrapAvatar}>
            <Image style={styles.avatar} source={photoProfile} />
          </View>
          <Gap height={16} />
          <Text style={styles.name}>{user.fullName}</Text>
          <Text style={styles.profession}>{user.profession}</Text>
        </View>
        <View>
          <List
            type="profile"
            label="Edit Profile"
            desc="Last updated yesterday"
            icon="editProfile"
            onPress={() => navigation.navigate('UpdateProfile', user)}
          />
          <List
            type="profile"
            label="Logout"
            icon="logout"
            desc="Keluar dari session akun ini"
            onPress={logout}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    justifyContent: 'space-around',
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
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
