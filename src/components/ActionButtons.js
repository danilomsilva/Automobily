import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import EditIconContained from '@images/editIcon_contained.png';
import DeleteIconContained from '@images/deleteIcon_contained.png';

const ActionButtons = ({deleteAction, editAction}) => {
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.actionButton} onPress={editAction}>
        <Image source={EditIconContained} style={styles.actionIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, styles.marginLeft]}
        onPress={deleteAction}>
        <Image source={DeleteIconContained} style={styles.actionIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
  actionButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
  marginLeft: {
    marginLeft: 10,
  },
});
