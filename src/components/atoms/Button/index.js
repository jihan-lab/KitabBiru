import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconArrowDark} from '../../../assets';

export default function Button({title, onPress, type, disable}) {
  if (type === 'icon-dark') {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container(type)}>
        <IconArrowDark />
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
    <TouchableOpacity onPress={onPress} style={styles.container(type)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'icon-dark' ? '' : colors.primary,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  }),

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
