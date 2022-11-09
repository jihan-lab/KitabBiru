import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Dummy2} from '../../assets';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

export default function Chatting({navigation}) {
  const [chatContent, setChatContent] = useState('');

  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Nabila"
        desc="Programmer React"
        image={Dummy2}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
      <View style={styles.chatContent}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ChatItem
            isMe
            text="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?"
            date="4.20 AM"
          />
          <ChatItem
            text="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?"
            date="4.20 AM"
          />
          <ChatItem
            isMe
            text="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?"
            date="4.20 AM"
          />
        </ScrollView>
        <InputChat
          value={chatContent}
          onChangeText={value => setChatContent(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chatDate: {
    textAlign: 'center',
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginVertical: 20,
  },
  chatContent: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
