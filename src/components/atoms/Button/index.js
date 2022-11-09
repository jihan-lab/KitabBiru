import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {
  IconArrowDark,
  IconArrowLight,
  IconSend,
  IconSendDisable,
} from '../../../assets';

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
  if (type === 'send') {
    return (
      <TouchableOpacity style={styles.send} onPress={onPress}>
        <IconSend />
      </TouchableOpacity>
    );
  }
  if (type === 'send-disable') {
    return (
      <View style={styles.sendDisable}>
        <IconSendDisable />
      </View>
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

  // send
  send: {
    backgroundColor: colors.primary,
    height: 45,
    width: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendDisable: {
    backgroundColor: colors.disable,
    height: 45,
    width: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
