import React, {useState} from 'react';
import {useController, useForm} from 'react-hook-form';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import WarningIcon from '@images/warningIcon_contained.png';

const Input = ({label, placeholder, name, control, keyboardType}) => {
  const [isValid, setIsValid] = useState(true);
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  const handleFieldValidation = () => {
    field.value ? setIsValid(true) : setIsValid(false);
  };

  return (
    <View style={styles.formRow}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={isValid ? styles.formInput : [styles.formInput, styles.error]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={keyboardType}
        name={name}
        onBlur={handleFieldValidation}
      />
      {!isValid && (
        <View style={styles.errorMessage}>
          <Image source={WarningIcon} style={styles.errorIcon} />
          <Text style={styles.errorText}>{label} is required</Text>
        </View>
      )}
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
  error: {
    borderColor: 'orange',
    borderWidth: 1,
  },
  errorMessage: {
    marginTop: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    fontSize: 12,
  },
  errorIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});
