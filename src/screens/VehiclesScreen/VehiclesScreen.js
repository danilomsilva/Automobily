import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';
import AddCarIcon from '@images/addCarIcon_outlined.png';

import AddVehicleModal from './AddVehicleModal';
import IconButton from '@components/IconButton';
import DefaultVehicleImage from '@images/defaultVehicleImage.jpg';

import VehicleColorIcon from '@images/vehicleColorIcon_contained.png';
import VehicleFuelIcon from '@images/vehicleFuelIcon_contained.png';
import VehicleMileageIcon from '@images/vehicleMileageIcon_contained.png';
import VehicleYearIcon from '@images/vehicleYearIcon_contained.png';

import EditIconOutlined from '@images/edit_outlined.png';

import {getVehicles} from '@api/vehiclesAPI';
import {TouchableOpacity} from 'react-native-gesture-handler';

const VehiclesScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const myVehicle = vehicles && vehicles[0];

  useEffect(() => {
    getVehicles().then(data => {
      setVehicles(Object.values(data));
    });
  }, []);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      {myVehicle ? (
        <View style={styles.vehicleContainer}>
          <Image source={DefaultVehicleImage} style={styles.vehicleImage} />
          <TouchableOpacity style={styles.removeButton}>
            <Image source={EditIconOutlined} style={styles.editIcon} />
          </TouchableOpacity>
          <View style={styles.vehicleInfo}>
            <Text style={styles.vehicleName}>
              {myVehicle?.make} {myVehicle?.model}
            </Text>
            <View style={styles.vehicleDetails}>
              <View style={styles.vehicleDetail}>
                <Image source={VehicleYearIcon} style={styles.vehicleIcon} />
                <Text style={styles.vehicleInfoText}>{myVehicle?.year}</Text>
              </View>
              <View style={styles.vehicleDetail}>
                <Image source={VehicleFuelIcon} style={styles.vehicleIcon} />
                <Text style={styles.vehicleInfoText}>
                  {myVehicle?.fuelType}
                </Text>
              </View>
              <View style={styles.vehicleDetail}>
                <Image source={VehicleColorIcon} style={styles.vehicleIcon} />
                <Text style={styles.vehicleInfoText}>{myVehicle?.color}</Text>
              </View>
              <View style={styles.vehicleDetail}>
                <Image source={VehicleMileageIcon} style={styles.vehicleIcon} />
                <Text style={styles.vehicleInfoText}>{myVehicle?.mileage}</Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <IconButton
          iconSource={AddCarIcon}
          buttonText="Add vehicle"
          action={handleToggleModal}
        />
      )}
      <AddVehicleModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </SafeAreaView>
  );
};

export default VehiclesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  vehicleContainer: {
    flex: 1,
    width: '100%',
  },
  vehicleImage: {
    width: '100%',
    height: 200,
  },
  vehicleInfo: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
  },
  vehicleName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vehicleIcon: {
    width: 40,
    height: 40,
  },
  vehicleDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleDetail: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  vehicleInfoText: {
    marginTop: 10,
  },
  removeButton: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
});
