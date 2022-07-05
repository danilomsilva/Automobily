import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AddCarIcon from '@images/addCarIcon_outlined.png';

import AddVehicleModal from './AddVehicleModal';
import IconButton from '@components/IconButton/IconButton';

const VehiclesScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        iconSource={AddCarIcon}
        buttonText="Add vehicle"
        action={handleToggleModal}
      />
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
});
