import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Category, Gap, HomeProfile, Tips} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {IlNullPhoto} from '../../assets';

export default function Home({navigation}) {
  const [user, setUser] = useState([]);
  const [photoProfile, setPhotoProfile] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      if (res.photo) {
        setUser(res);
        setPhotoProfile({uri: res.photo});
      } else {
        setUser(res);
        setPhotoProfile(IlNullPhoto);
      }
    });
  }, [user]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Gap height={30} />
            <HomeProfile
              fullName={user.fullName}
              profession={user.profession}
              photo={photoProfile}
              onPress={() => navigation.navigate('UserProfile')}
            />
            <Gap height={30} />
            <Text style={styles.welcome}>Mau belajar apa hari ini?</Text>
            <Gap height={12} />
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                <Category onPress={() => navigation.navigate('ListModule')} />
                <Category onPress={() => navigation.navigate('ListModule')} />
                <Category onPress={() => navigation.navigate('ListModule')} />
                <Category onPress={() => navigation.navigate('ListModule')} />
                <Gap width={16} />
              </View>
            </ScrollView>
          </View>
          <Gap height={29} />
          <Text style={styles.tips}>Tips Coding</Text>
          <Gap height={24} />
          <Tips />
          <Tips />
          <Tips />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 160,
  },
  tips: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    paddingHorizontal: 16,
  },
  category: {
    flexDirection: 'row',
  },
});
