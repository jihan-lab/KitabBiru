import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {IlHTML} from '../../../assets';

export default function Header({onPress, title, type, desc, image}) {
  if (type === 'dark') {
    return (
      <View style={styles.containerDark}>
        <Button type="icon-light" onPress={onPress} />
        <View>
          <Text style={styles.textDark}>{title}</Text>
          <Text style={styles.descDark}>{desc}</Text>
        </View>
        <Image style={styles.image} source={image} />
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
    justifyContent: 'space-between',
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
    fontFamily: fonts.primary[600],
  },
  descDark: {
    textAlign: 'center',
    fontSize: 17,
    marginTop: 6,
    color: colors.text.darkHeader,
    fontFamily: fonts.primary[400],
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
  },
});
