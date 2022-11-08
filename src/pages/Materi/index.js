import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, fonts} from '../../utils';

export default function Materi({navigation}) {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Pengenalan HTML" onPress={() => navigation.goBack()} />
        <View style={styles.wrapText}>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <Text style={styles.title}>Contoh</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapText: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    lineHeight: 21.82,
    color: colors.text.primary,
    marginHorizontal: 16,
    textAlign: 'justify',
    marginBottom: 38,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginTop: 17,
    marginBottom: 21,
    marginHorizontal: 16,
  },
});
