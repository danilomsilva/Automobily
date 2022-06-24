import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import UploadImageIcon from '@images/uploadImageIcon_outlined.png';
import EditIconOutlined from '@images/edit_outlined.png';
import IconButton from '@components/IconButton';
import Button from '@components/Button';

const AddVehicleModal = ({modalOpen, setModalOpen}) => {
  const [resourcePath, setResourcePath] = useState({});
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [fuelType, setFuelType] = useState('');

  const URI = resourcePath?.assets ? resourcePath?.assets[0].uri : 'NONE';

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

  const handleChangeMake = () => {
    setMake(make);
  };

  const handleChangeModel = () => {
    setModel(model);
  };

  const handleChangeYear = () => {
    setYear(year);
  };

  const handleChangeColor = () => {
    setColor(color);
  };

  const handleChangeFuelType = () => {
    setFuelType(fuelType);
  };

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

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
          source={{uri: URI}}
          style={styles.modalImageBackground}>
          {URI === 'NONE' ? (
            <IconButton
              iconSource={UploadImageIcon}
              buttonText="Upload Picture"
              action={imageGalleryLaunch}
            />
          ) : (
            <TouchableOpacity
              style={styles.editButton}
              onPress={imageGalleryLaunch}>
              <Image source={EditIconOutlined} style={styles.editIcon} />
            </TouchableOpacity>
          )}
        </ImageBackground>
        <View style={styles.form}>
          <View style={styles.formGrid}>
            <View style={styles.formRow}>
              <Text style={styles.formLabel}>Make</Text>
              <TextInput
                value={make}
                onChangeText={handleChangeMake}
                style={styles.formInput}
              />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formLabel}>Model</Text>
              <TextInput
                value={model}
                onChangeText={handleChangeModel}
                style={styles.formInput}
              />
            </View>
          </View>
          <View style={styles.formGrid}>
            <View style={styles.formRow}>
              <Text style={styles.formLabel}>Year</Text>
              <TextInput
                value={year}
                onChangeText={handleChangeYear}
                style={styles.formInput}
              />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formLabel}>Fuel Type</Text>
              <TextInput
                value={fuelType}
                onChangeText={handleChangeFuelType}
                style={styles.formInput}
              />
            </View>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Color</Text>
            <TextInput
              value={color}
              onChangeText={handleChangeColor}
              style={styles.formInput}
            />
          </View>
          <View style={styles.formCTA}>
            <Button
              text="Cancel"
              variant="outlined"
              action={handleToggleModal}
            />
            <Button text="Save" variant="gradient" />
          </View>
        </View>
      </View>
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
  formRow: {
    paddingBottom: 15,
    paddingRight: 20,
    width: '50%',
  },
  formLabel: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  formInput: {
    backgroundColor: 'white',
    color: 'gray',
    borderRadius: 10,
    padding: 10,
  },
  formCTA: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 10,
  },
});
