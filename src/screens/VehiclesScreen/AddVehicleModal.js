import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {launchImageLibrary} from 'react-native-image-picker';

import UploadImageIcon from '@images/uploadImageIcon_outlined.png';
import EditIconOutlined from '@images/editIcon_outlined.png';
import DefaultVehicleImage from '@images/defaultVehicleImage.jpg';

import IconButton from '@components/IconButton';
import Button from '@components/Button';
import Input from '@components/Input';
import Select from '@components/Select';

import {postVehicle} from '@api/vehiclesAPI';

const AddVehicleModal = ({modalOpen, setModalOpen}) => {
  const [resourcePath, setResourcePath] = useState({});
  const {control, handleSubmit, reset} = useForm();
  const URI = resourcePath?.assets ? resourcePath?.assets[0].uri : 'NONE';

  const onSubmit = data => {
    alert(JSON.stringify(data));
    const vehicleData = {
      ...data,
      image: resourcePath,
    };
    postVehicle(vehicleData);
    reset();
  };

  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker'); //TODO
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error); //TODO
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton); //TODO
      } else {
        setResourcePath(res);
      }
    });
  };

  const handleToggleModal = () => {
    reset();
    setModalOpen(!modalOpen);
  };

  const handleAddVehicle = () => {
    console.log('handleAddVehicle');
    () => handleSubmit(onSubmit);
  };

  return (
    <Modal
      visible={modalOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setModalOpen(false);
      }}>
      <KeyboardAvoidingView behavior="padding" style={styles.modalContainer}>
        {URI === 'NONE' ? (
          <View style={styles.modalImageBackground}>
            <IconButton
              iconSource={UploadImageIcon}
              buttonText="Upload Picture"
              action={imageGalleryLaunch}
            />
          </View>
        ) : (
          <ImageBackground
            source={{uri: URI}}
            style={styles.modalImageBackground}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={imageGalleryLaunch}>
              <Image source={EditIconOutlined} style={styles.editIcon} />
            </TouchableOpacity>
          </ImageBackground>
        )}

        <View style={styles.form}>
          <View style={styles.formGrid}>
            <Input
              label="Make"
              name="make"
              control={control}
              placeholder="Nissan"
            />
            <Input
              label="Model"
              name="model"
              control={control}
              placeholder="Qashqai"
            />
          </View>
          <View style={styles.formGrid}>
            <Input
              label="Year"
              name="year"
              control={control}
              placeholder="2018"
              keyboardType="numeric"
            />
            <Select
              label="Fuel Type"
              data={['Diesel', 'Electric', 'Gas', 'Petrol', 'Other']}
              name="fuelType"
              control={control}
            />
          </View>
          <View style={styles.formGrid}>
            <Input
              label="Color"
              name="color"
              control={control}
              placeholder="Black"
            />
          </View>
          <View style={styles.formCTA}>
            <Button
              text="Cancel"
              variant="outlined"
              action={handleToggleModal}
            />
            <Button text="Save" variant="contained" action={handleAddVehicle} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddVehicleModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#325a80',
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
  editButton: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 90,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    width: 25,
    height: 25,
  },
  form: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  formGrid: {
    flexDirection: 'row',
  },
  formCTA: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 10,
  },
});
