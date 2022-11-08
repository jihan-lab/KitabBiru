import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function List() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={Dummy1} />
      <View style={styles.content}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>
          Oh kamu juga lagi belajar menggunakan...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
    paddingBottom: 17,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
    marginLeft: 16,
  },
  content: {
    justifyContent: 'center',
    maxWidth: '78%',
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
