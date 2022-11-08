import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Dummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function List({type, number, title, onPress}) {
  if (type === 'module') {
    return (
      <TouchableOpacity onPress={onPress} style={styles.moduleContainer}>
        <View style={styles.moduleContent}>
          <Text style={styles.number}>{number}.</Text>
          <Text style={styles.module}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
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

  // module
  moduleContainer: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 14,
    shadowColor: colors.black,
    elevation: 20,
    justifyContent: 'center',
  },
  moduleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  module: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginLeft: 37,
  },
  number: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
