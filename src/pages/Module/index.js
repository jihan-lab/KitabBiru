import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, List} from '../../components';
import {colors} from '../../utils';

export default function Module({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        desc="Pemrograman Basic"
        title="HTML"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <Gap height={14} />
      <List
        onPress={() => navigation.navigate('Materi')}
        type="module"
        title="Pengenalan HTML"
        number="1"
      />
      <List
        onPress={() => navigation.navigate('Materi')}
        type="module"
        title="Apa itu HTML"
        number="2"
      />
      <List
        onPress={() => navigation.navigate('Materi')}
        type="module"
        title="Text Editor untuk HTML"
        number="3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
