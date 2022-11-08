import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IlAndroidCat} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Category({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.wrapImgCat}>
        <Image style={styles.imgCat} source={IlAndroidCat} />
      </View>
      <View>
        <Text style={styles.title}>Basic</Text>
        <Text style={styles.desc}>Pemrograman</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: 110,
    height: 130,
    padding: 12,
    justifyContent: 'space-between',
    borderRadius: 10,
    marginRight: 10,
  },
  wrapImgCat: {
    backgroundColor: colors.primary,
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCat: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
