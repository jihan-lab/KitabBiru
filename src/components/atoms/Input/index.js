import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

export default function Input({
  label,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  disable,
}) {
  const [border, setBorder] = useState(colors.border);

  const onFocusForm = () => {
    setBorder(colors.primary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onBlur={onBlurForm}
        onFocus={onFocusForm}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        style={styles.input(disable, border)}
        secureTextEntry={secureTextEntry}
        editable={!disable}
      />
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
  input: (disable, border) => ({
    borderWidth: 1,
    borderColor: border,
    marginTop: 8,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: disable ? colors.text.disable : colors.text.primary,
    backgroundColor: disable ? colors.disable : '',
  }),
});
