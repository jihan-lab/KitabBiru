import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {colors} from '../../../utils';

export default function Header({onPress}) {
  return (
    <View style={styles.container}>
      <Button type="icon-dark" onPress={onPress} />
      <Text style={styles.text}>Upload Photo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.text.primary,
    flex: 1,
  },
});
