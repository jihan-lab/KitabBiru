import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyTips} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Tips() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>React JS</Text>
        <Text style={styles.desc}>6 Tips</Text>
      </View>
      <Image style={styles.image} source={DummyTips} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
    paddingBottom: 12,
  },
  image: {
    height: 60,
    width: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginLeft: 16,
  },
  desc: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginLeft: 16,
  },
});
