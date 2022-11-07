import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 8,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
