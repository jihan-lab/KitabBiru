import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconAddPhoto, IconRemovePhoto, IlNullPhoto} from '../../assets';
import {Button, Header} from '../../components';
import {colors, fonts, showError, storeData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {Fire} from '../../config';

export default function UploadPhoto({navigation, route}) {
  const {fullName, profession, uid} = route.params;

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(IlNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  const getImage = () => {
    launchImageLibrary(
      {
        includeBase64: true,
        quality: 0.5,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        if (response.didCancel || response.errorCode) {
          showError('Ups, sepetinya anda belum memilih photo');
        } else {
          console.log('response image: ', response);
          const source = {uri: response.assets[0].uri};
          setPhotoForDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadForContinue = () => {
    Fire.database().ref(`user/${uid}/`).update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;
    storeData('user', data);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image style={styles.avatar} source={photo} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button onPress={uploadForContinue} title="Unggah dan Lanjut" />
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
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 84,
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 26,
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
