import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconEditProfile, IconLogout, IconNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListLabel({label, desc, onPress}) {
  return (
    <View onPress={onPress} style={styles.container}>
      <View style={styles.wrapContent}>
        <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 20,
    marginTop: 16,
  },
  wrapContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  desc: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
