import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

const IconButton = ({iconSource, buttonText = '', action = () => {}}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Image source={iconSource} style={styles.buttonIcon} />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  buttonIcon: {
    width: 64,
    height: 64,
    tintColor: 'white',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
