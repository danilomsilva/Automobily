import React from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';

import DefaultCarImage from '@images/defaultCarImage.jpeg';
import UploadImageIcon from '@images/uploadImageIcon_outlined.png';

import IconButton from '@components/IconButton/IconButton';

const AddVehicleModal = ({modalOpen, setModalOpen}) => {
  return (
    <Modal
      visible={modalOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setModalOpen(false);
      }}>
      <View style={styles.modalContainer}>
        <ImageBackground
          source={DefaultCarImage}
          style={styles.modalImageBackground}>
          <IconButton
            iconSource={UploadImageIcon}
            buttonText="Upload Picture"
            action={() => {
              alert('open gallery and select picture');
            }}
          />
        </ImageBackground>
      </View>
    </Modal>
  );
};

export default AddVehicleModal;
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'orange',
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  modalImageBackground: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
