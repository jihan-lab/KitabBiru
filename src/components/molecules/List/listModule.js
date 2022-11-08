import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function ListModule({onPress, number, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.moduleContainer}>
      <View style={styles.moduleContent}>
        <Text style={styles.number}>{number}.</Text>
        <Text style={styles.module}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
