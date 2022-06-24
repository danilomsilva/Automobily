import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({variant, text = '#999', action}) => {
  if (variant === 'outlined') {
    return (
      <TouchableOpacity style={styles.buttonVarText} onPress={action}>
        <Text style={styles.textVarText}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (variant === 'contained') {
    return (
      <TouchableOpacity style={styles.buttonVarContained}>
        <Text style={styles.textVarContained}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (variant === 'gradient') {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.buttonVarContained}>
        <TouchableOpacity>
          <Text style={styles.textVarContained}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return null;
};

export default Button;

const styles = StyleSheet.create({
  buttonVarText: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 9,
    borderRadius: 10,
  },
  textVarText: {
    color: '#fff',
    fontSize: 14,
  },
  buttonVarContained: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textVarContained: {
    color: '#fff',
    fontSize: 14,
  },
});
