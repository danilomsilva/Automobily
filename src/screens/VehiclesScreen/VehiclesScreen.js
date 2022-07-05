import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';

import AddVehicleModal from './AddVehicleModal';
import IconButton from '@components/IconButton';
import ActionButtons from '@components/ActionButtons';

import AddCarIcon from '@images/addCarIcon_outlined.png';
import DefaultVehicleImage from '@images/defaultVehicleImage.jpg';
import VehicleColorIcon from '@images/vehicleColorIcon_contained.png';
import VehicleFuelIcon from '@images/vehicleFuelIcon_contained.png';
import VehicleMileageIcon from '@images/vehicleMileageIcon_contained.png';
import VehicleYearIcon from '@images/vehicleYearIcon_contained.png';

import {getVehicles, deleteVehicle, postVehicle} from '@api/vehiclesAPI';

const VehiclesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [isVehicleRegistered, setIsVehicleRegistered] = useState(false);
  const {make, model, year, color, fuelType, mileage} = vehicles?.values;

  useEffect(() => {
    getVehicles().then(data => {
      if (!data) return;
      setVehicles({id: Object.keys(data)[0], values: Object.values(data)[0]});
    });
  }, [isVehicleRegistered]);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleDeleteVehicle = () => {
    setIsLoading(true);
    deleteVehicle(vehicles?.id).then(() => {
      setIsLoading(false);
      setIsVehicleRegistered(false);
    });
  };

  const handleAddVehicle = (data, resourcePath) => {
    const vehicleData = {
      ...data,
      image: resourcePath,
    };
    setIsLoading(true);
    postVehicle(vehicleData).then(() => {
      setIsLoading(false);
      setIsVehicleRegistered(true);
    });
  };

  // const editVehicle = () => {
  //   console.log('editing vehicle');
  // };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.fullOverlay}>
          <ActivityIndicator size="large" color="#ffff" />
        </View>
      )}

      {isVehicleRegistered ? (
        <View style={styles.vehicleContainer}>
          <Image source={DefaultVehicleImage} style={styles.vehicleImage} />
          <View style={styles.vehicleInfo}>
            <Text style={styles.vehicleName}>
              {make} {model}
            </Text>
            <View style={styles.vehicleDetails}>
              <View style={styles.vehicleDetail}>
                <Image source={VehicleYearIcon} style={styles.vehicleIcon} />
                <Text style={styles.vehicleInfoText}>{year}</Text>
              </View>
              <View style={styles.vehicleDetail}>
                <Image source={VehicleFuelIcon} style={styles.vehicleIcon} />
                <Text style={styles.vehicleInfoText}>{fuelType}</Text>
              </View>
              <View style={styles.vehicleDetail}>
                <Image source={VehicleColorIcon} style={styles.vehicleIcon} />
                <Text style={styles.vehicleInfoText}>{color}</Text>
              </View>
              <View style={styles.vehicleDetail}>
                <Image source={VehicleMileageIcon} style={styles.vehicleIcon} />
                <Text style={styles.vehicleInfoText}>{mileage}</Text>
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
      <AddVehicleModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleAddVehicle={handleAddVehicle}
      />
      {isVehicleRegistered && (
        <ActionButtons
          deleteAction={handleDeleteVehicle}
          // editAction={editVehicle}
        />
      )}
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
    padding: 30,
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
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  vehicleInfoText: {
    marginTop: 10,
    color: '#8c8c8c',
  },
  fullOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
