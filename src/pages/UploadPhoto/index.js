import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header} from '../../components';
import {IlNullPhoto} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../utils';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={IlNullPhoto} />
          </TouchableOpacity>
          <Text style={styles.name}>Anastasya</Text>
          <Text style={styles.profession}>Mahasiswa</Text>
        </View>
        <View style={styles.button}>
          <Button disable title="Unggah dan Lanjut" />
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
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    height: 110,
    width: 110,
  },
  avatarWrapper: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 26,
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
  button: {
    paddingHorizontal: 40,
  },
});
