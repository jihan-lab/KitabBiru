import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardModule, Gap, Header, List} from '../../components';
import {colors, fonts} from '../../utils';
import {Dummy3} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

export default function ListModule({navigation}) {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Mulai Dari Basics" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
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
          <Gap height={40} />
          <Text style={styles.mentor}>Mentor</Text>
          <Gap height={20} />
          <View>
            <List
              photo={Dummy3}
              title="Jihan Abdul Rohman"
              desc="MobileDeveloper"
              onPress={() => navigation.navigate('MentorProfile')}
            />
            <List
              photo={Dummy3}
              title="Jihan Abdul Rohman"
              desc="MobileDeveloper"
              onPress={() => navigation.navigate('MentorProfile')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  mentor: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginLeft: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  listModule: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
