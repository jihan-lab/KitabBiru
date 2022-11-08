import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, List} from '../../components';
import {DummyUser1, IconRemovePhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';

export default function UpdateProfile({navigation}) {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
        <View>
          <TouchableOpacity style={styles.profile}>
            <View style={styles.wrapAvatar}>
              <Image style={styles.avatar} source={DummyUser1} />
              <IconRemovePhoto style={styles.iconRemove} />
            </View>
          </TouchableOpacity>
          <Gap height={26} />
          <View style={styles.input}>
            <Input label="Full Name" />
            <Input label="Profession" />
            <Input label="Email" />
            <Input label="No. Hp" />
            <Input label="Password" />
            <Gap height={40} />
            <Button title="Simpan Profile" />
            <Gap height={20} />
          </View>
        </View>
      </ScrollView>
    </View>
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
