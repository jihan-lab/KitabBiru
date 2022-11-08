import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IlHTML} from '../../../assets';

export default function CardModule({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.wrapImage}>
        <Image style={styles.image} source={IlHTML} />
      </View>
      <Text style={styles.label}>HTML</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 43,
    width: 158,
    height: 149,
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 48,
    marginBottom: 13,
    marginLeft: 12,
  },
  wrapImage: {
    borderBottomWidth: 2,
    borderColor: colors.white,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.white,
    marginTop: 11,
    marginLeft: 12,
  },
});
