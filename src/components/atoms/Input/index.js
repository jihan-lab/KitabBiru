import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

export default function Input({placeholder}) {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 11,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
