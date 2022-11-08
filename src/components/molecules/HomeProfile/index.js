import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DummyUser1} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function HomeProfile({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.avatar} source={DummyUser1} />
      <View>
        <Text style={styles.name}>Anastasya</Text>
        <Text style={styles.profession}>Mahasiswa</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
