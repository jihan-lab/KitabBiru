import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Link({title}) {
  return (
    <TouchableOpacity>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    fontFamily: fonts.primary[700],
    fontSize: 12,
    color: colors.primary,
  },
});
