import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Dummy2} from '../../../assets';

export default function Other({text, date}) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={Dummy2} />
      <View>
        <View style={styles.content}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingLeft: 16,
    alignItems: 'flex-end',
  },
  avatar: {
    marginRight: 12,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  content: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    maxWidth: '80%',
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 8,
  },
});
