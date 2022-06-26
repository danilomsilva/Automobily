import React from 'react';
import {useController} from 'react-hook-form';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({label, placeholder, name, control, keyboardType}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <View style={styles.formRow}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={styles.formInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formInput: {
    backgroundColor: 'white',
    color: 'gray',
    borderRadius: 10,
    padding: 10,
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
});
