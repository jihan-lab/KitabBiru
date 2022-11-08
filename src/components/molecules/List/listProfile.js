import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconEditProfile, IconLogout, IconNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListProfile({icon, label, desc, onPress}) {
  const Icon = () => {
    if (icon === 'logout') {
      return <IconLogout />;
    }
    if (icon === 'editProfile') {
      return <IconEditProfile />;
    }
    return <IconEditProfile />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.wrapContent}>
        <View style={styles.icon}>
          <Icon />
        </View>
        <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      <IconNext style={styles.icon} />
    </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  wrapContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
