import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, List} from '../../components';
import {Dummy3, DummyUser1} from '../../assets';
import {colors, fonts} from '../../utils';

export default function MentorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Mentor Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.wrapAvatar}>
            <Image style={styles.avatar} source={Dummy3} />
          </View>
          <Gap height={16} />
          <Text style={styles.name}>Jihan Abdul Rohman</Text>
          <Text style={styles.profession}>Fullstack Web Developer</Text>
        </View>
        <View>
          <List
            type="label"
            label="Alumnus"
            desc="Universitas Pamulang, 2019"
          />
          <List
            type="label"
            label="Pekerjaan"
            desc="Software Engineer di Tokopedia"
          />
          <List type="label" label="Kategori" desc="Mobile Developer" />
        </View>
        <View style={styles.button}>
          <Button
            title="Kirim Pesan"
            onPress={() => navigation.navigate('Chatting')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    justifyContent: 'space-around',
    flex: 1,
  },
  profile: {
    alignItems: 'center',
  },
  wrapAvatar: {
    borderWidth: 1,
    borderColor: colors.border,
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 130 / 2,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  button: {
    marginHorizontal: 40,
  },
});
