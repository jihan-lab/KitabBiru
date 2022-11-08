import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IconArrowDark, IconArrowLight} from '../../../assets';

export default function Button({title, onPress, type, disable}) {
  if (type === 'icon-dark') {
    return (
      <TouchableOpacity onPress={onPress}>
        <IconArrowDark />
      </TouchableOpacity>
    );
  }
  if (type === 'icon-light') {
    return (
      <TouchableOpacity onPress={onPress}>
        <IconArrowLight />
      </TouchableOpacity>
    );
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.white,
  },
  disableText: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.disable,
  },
  disableBg: {
    backgroundColor: colors.disable,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
});
