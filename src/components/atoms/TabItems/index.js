import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconMessage,
  IconMessageActive,
  IconQuiz,
  IconQuizActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function TabItems({title, active, onLongPress, onPress}) {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Messages') {
      return active ? <IconMessageActive /> : <IconMessage />;
    }
    if (title === 'Quiz') {
      return active ? <IconQuizActive /> : <IconQuiz />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  text: active => ({
    fontSize: 10,
    color: active ? colors.iconMenuActive : colors.black,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
