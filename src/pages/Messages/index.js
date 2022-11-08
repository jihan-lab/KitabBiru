import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, List} from '../../components';
import {colors, fonts} from '../../utils';

export default function Messages() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Gap height={30} />
        <Text style={styles.title}>Messages</Text>
        <Gap height={16} />
        <List />
        <List />
        <List />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    paddingHorizontal: 16,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
