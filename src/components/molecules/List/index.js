import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';
import ListLabel from './listLabel';
import ListModule from './listModule';
import ListProfile from './listProfile';

export default function List({
  type,
  number,
  title,
  onPress,
  icon,
  desc,
  label,
  photo,
}) {
  if (type === 'module') {
    return <ListModule number={number} title={title} onPress={onPress} />;
  }

  if (type === 'profile') {
    return (
      <ListProfile icon={icon} desc={desc} label={label} onPress={onPress} />
    );
  }
  if (type === 'label') {
    return <ListLabel desc={desc} label={label} />;
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.avatar} source={photo} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
    paddingBottom: 17,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
    marginLeft: 16,
  },
  content: {
    justifyContent: 'center',
    maxWidth: '78%',
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
