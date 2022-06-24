import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const Gallery = () => {
  const [resourcePath, setResourcePath] = useState({});
  const URI = resourcePath?.assets ? resourcePath?.assets[0].uri : 'NOTHING';

  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        setResourcePath(res);
      }
    });
  };

  return (
    <View>
      <Image source={{uri: URI}} style={{width: '100%', height: 200}} />
      <TouchableOpacity onPress={imageGalleryLaunch}>
        <Text>Launch Image Gallery Directly</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Gallery;
