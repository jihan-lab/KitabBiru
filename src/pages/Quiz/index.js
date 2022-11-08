import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {List} from '../../components';

export default function Quiz() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text>Messages</Text>
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
  container: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
