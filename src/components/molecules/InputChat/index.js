import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';

export default function InputChat({value, onChangeText, onPress}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        type={value.length < 1 ? 'send-disable' : 'send'}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inputChat,
    flex: 1,
    padding: 14,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    maxHeight: 45,
    marginRight: 10,
  },
});
