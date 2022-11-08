import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardModule, Gap, Header} from '../../components';

export default function ListModule({navigation}) {
  return (
    <View>
      <Header title="Mulai Dari Basics" onPress={() => navigation.goBack()} />
      <View style={styles.list}>
        <View style={styles.listModule}>
          <CardModule onPress={() => navigation.navigate('Module')} />
          <CardModule onPress={() => navigation.navigate('Module')} />
        </View>
        <Gap height={15} />
        <View style={styles.listModule}>
          <CardModule onPress={() => navigation.navigate('Module')} />
          <CardModule onPress={() => navigation.navigate('Module')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
  },
  listModule: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
