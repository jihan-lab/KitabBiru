import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {colors} from '../../../utils';
import {IlHTML} from '../../../assets';

export default function Header({onPress, title, type}) {
  if (type === 'dark') {
    return (
      <View style={styles.containerDark}>
        <Button type="icon-light" onPress={onPress} />
        <Text style={styles.textDark}>{title}</Text>
        <Image style={styles.image} source={IlHTML} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Button type="icon-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
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

  // Dark
  containerDark: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.black,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textDark: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    flex: 1,
  },
  image: {
    height: 48,
    width: 45,
  },
});
