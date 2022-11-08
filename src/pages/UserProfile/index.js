import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, List} from '../../components';
import {DummyUser1} from '../../assets';
import {colors, fonts} from '../../utils';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.wrapAvatar}>
            <Image style={styles.avatar} source={DummyUser1} />
          </View>
          <Gap height={16} />
          <Text style={styles.name}>Anastassya</Text>
        </View>
        <View>
          <List
            type="profile"
            label="Edit Profile"
            desc="Last updated yesterday"
            icon="editProfile"
            onPress={() => navigation.navigate('UpdateProfile')}
          />
          <List
            type="profile"
            label="Logout"
            icon="logout"
            desc="Keluar dari session akun ini"
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
});
