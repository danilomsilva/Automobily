import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({variant, text = '#999', action, enabled = false}) => {
  if (variant === 'outlined') {
    return (
      <TouchableOpacity style={styles.buttonVarText} onPress={action}>
        <Text style={styles.textVarText}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (variant === 'contained') {
    return (
      <TouchableOpacity
        style={
          enabled
            ? styles.buttonVarContained
            : [styles.buttonVarContained, styles.buttonDisabled]
        }
        onPress={action}
        activeOpacity={enabled ? 0.5 : 1}>
        <Text style={styles.textVarContained}>{text}</Text>
      </TouchableOpacity>
    );
  }

  return null;
};

export default Button;

const styles = StyleSheet.create({
  buttonVarText: {
    backgroundColor: 'transparent',
    padding: 9,
    borderRadius: 10,
  },
  textVarText: {
    color: '#fff',
    fontSize: 14,
  },
  buttonVarContained: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
    marginLeft: 15,
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
  textVarContained: {
    color: '#666',
    fontSize: 14,
  },
});
